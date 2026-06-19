export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function generateSlug(name: string): string {
  const base = slugify(name) || "missionary";
  const suffix = crypto.randomUUID().slice(0, 6);
  return `${base}-${suffix}`;
}
