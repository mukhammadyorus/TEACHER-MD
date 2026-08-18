// Supabase browser client. This uses the public project key only.
window.classcheckSupabase = window.supabase?.createClient(
  window.CLASSCHECK_SUPABASE.url,
  window.CLASSCHECK_SUPABASE.publishableKey
);
