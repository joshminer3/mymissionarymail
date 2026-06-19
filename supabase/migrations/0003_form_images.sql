alter table forms add column image_url text;

-- public_forms must be recreated (not just altered) to add a column;
-- Postgres allows this as long as existing columns keep their order.
create or replace view public_forms as
select id, slug, title, missionary_name, welcome_message, created_at, image_url
from forms;

insert into storage.buckets (id, name, public)
values ('form-images', 'form-images', true)
on conflict (id) do nothing;

-- Public read doesn't need a policy: Supabase serves public-bucket objects
-- via the /storage/v1/object/public/... URL without checking RLS at all.
-- Writes are restricted to a user's own folder (form-images/<user_id>/...).
create policy "form_images_insert_own" on storage.objects
  for insert with check (
    bucket_id = 'form-images'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "form_images_update_own" on storage.objects
  for update using (
    bucket_id = 'form-images'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "form_images_delete_own" on storage.objects
  for delete using (
    bucket_id = 'form-images'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
