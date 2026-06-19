import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/slug";

function csvField(value: string): string {
  if (/[",\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { data: form } = await supabase
    .from("forms")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!form) {
    return new NextResponse("Not found", { status: 404 });
  }

  const { data: responses } = await supabase
    .from("responses")
    .select("name, email")
    .eq("form_id", params.id)
    .order("submitted_at", { ascending: false });

  const rows = [
    "Name,Email",
    ...(responses ?? []).map(
      (r) => `${csvField(r.name)},${csvField(r.email)}`
    ),
  ];

  return new NextResponse(rows.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${slugify(
        form.missionary_name
      )}-responses.csv"`,
    },
  });
}
