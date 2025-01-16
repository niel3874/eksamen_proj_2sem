import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://umsrfsonmiqheskcesqh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtc3Jmc29ubWlxaGVza2Nlc3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MTY5MTIsImV4cCI6MjA1MjA5MjkxMn0.xoD0-NmvSUQXCm3JGTpHuFk-CrL-v_0M-ieSKLA0uPs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
