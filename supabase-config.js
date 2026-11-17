
const SUPABASE_URL = "https://lriojwlaxemghavidsjt.supabase.co/rest/v1/";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_HFnwZD1cccBr6RsIDhZPbA_MxHGK0T6";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

window.supabaseClient = supabaseClient;

console.log("Preserver Trans database connection initialized.");
