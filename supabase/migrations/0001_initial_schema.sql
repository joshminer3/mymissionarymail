-- forms: one row per missionary's shareable signup page
create table if not exists forms (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  slug text not null unique,
  title text not null,
  missionary_name text not null,
  welcome_message text not null,
  created_at timestamptz not null default now()
);

-- responses: one row per visitor submission on a form's public page
create table if not exists responses (
  id uuid primary key default gen_random_uuid(),
  form_id uuid not null references forms (id) on delete cascade,
  name text not null,
  email text not null,
  relationship text,
  message text,
  submitted_at timestamptz not null default now()
);

create index if not exists responses_form_id_idx on responses (form_id);

alter table forms enable row level security;
alter table responses enable row level security;

-- forms: only the owner can see or manage their own forms
create policy "forms_select_own" on forms
  for select using (auth.uid() = user_id);

create policy "forms_insert_own" on forms
  for insert with check (auth.uid() = user_id);

create policy "forms_update_own" on forms
  for update using (auth.uid() = user_id);

create policy "forms_delete_own" on forms
  for delete using (auth.uid() = user_id);

-- responses: anyone (including anonymous visitors) can submit to a form,
-- but only the form's owner can read, edit, or delete the submissions
create policy "responses_insert_public" on responses
  for insert with check (true);

create policy "responses_select_owner" on responses
  for select using (
    exists (
      select 1 from forms
      where forms.id = responses.form_id
      and forms.user_id = auth.uid()
    )
  );

create policy "responses_delete_owner" on responses
  for delete using (
    exists (
      select 1 from forms
      where forms.id = responses.form_id
      and forms.user_id = auth.uid()
    )
  );
