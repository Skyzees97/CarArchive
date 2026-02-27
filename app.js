import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://yxyestuimxgtcioucagc.supabase.co";
const supabaseKey = "sb_publishable_B4UFiznL1MtNrHAcw0rnig_bG9mRQJw";

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  const { data, error } = await supabase
    .from("cars")
    .select("*");

  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Connected. Cars:", data);
  }
}

testConnection();