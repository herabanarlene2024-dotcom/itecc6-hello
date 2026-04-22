import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'ggswymzukvoogpopgahv'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdnc3d5bXp1a3Zvb2dwb3BnYWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4MzkzMDgsImV4cCI6MjA5MjQxNTMwOH0.V2a1idq5SZvFco-j6Ia_FQfgGEeOlE7RFlMqRsE7-3w'

export const supabase = createClient(supabaseUrl, supabaseKey)