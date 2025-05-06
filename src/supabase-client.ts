import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://lqdfucpzkdkplthwqljr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxZGZ1Y3B6a2RrcGx0aHdxbGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0Njg2MjksImV4cCI6MjA2MjA0NDYyOX0.LvnUJD7CaSnPsq_BD5zFuZ4q8IaetQmtUgC2cvQuEqk"
);
