"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { generateSlug } from "@/lib/slug";

const MAX_SLUG_ATTEMPTS = 5;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

export async function createForm(formData: FormData) {
  const title = formData.get("title") as string;
  const missionaryName = formData.get("missionary_name") as string;
  const welcomeMessage = formData.get("welcome_message") as string;
  const image = formData.get("image");

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  let imageUrl: string | null = null;

  if (image instanceof File && image.size > 0) {
    if (!image.type.startsWith("image/")) {
      redirect(
        `/forms/new?error=${encodeURIComponent("Image must be a picture file")}`
      );
    }
    if (image.size > MAX_IMAGE_BYTES) {
      redirect(
        `/forms/new?error=${encodeURIComponent("Image must be under 5MB")}`
      );
    }

    const ext = image.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${user.id}/${crypto.randomUUID()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("form-images")
      .upload(path, image);

    if (uploadError) {
      redirect(`/forms/new?error=${encodeURIComponent(uploadError.message)}`);
    }

    imageUrl = supabase.storage.from("form-images").getPublicUrl(path).data
      .publicUrl;
  }

  for (let attempt = 0; attempt < MAX_SLUG_ATTEMPTS; attempt++) {
    const slug = generateSlug(missionaryName);

    const { error } = await supabase.from("forms").insert({
      user_id: user.id,
      slug,
      title,
      missionary_name: missionaryName,
      welcome_message: welcomeMessage,
      image_url: imageUrl,
    });

    if (!error) {
      redirect("/?created=1");
    }

    // 23505 = unique_violation — slug collision, try again with a new suffix
    if (error.code !== "23505") {
      redirect(`/forms/new?error=${encodeURIComponent(error.message)}`);
    }
  }

  redirect(
    `/forms/new?error=${encodeURIComponent(
      "Could not generate a unique link, please try again"
    )}`
  );
}
