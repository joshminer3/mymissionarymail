-- Exposes only the public-safe columns of `forms` (no user_id) for the
-- public /m/[slug] page. Views created without `security_invoker` run RLS
-- checks as the view's owner rather than the querying role, so this view
-- bypasses the owner-only RLS policy on `forms` by design — anon/authenticated
-- can read every row through this view, but only these columns, and never
-- user_id. The underlying `forms` table's RLS is untouched.
create view public_forms as
select id, slug, title, missionary_name, welcome_message, created_at
from forms;

grant select on public_forms to anon, authenticated;
