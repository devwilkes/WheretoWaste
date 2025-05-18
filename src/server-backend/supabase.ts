import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wmhibnbyqmhpuycdvjdb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtaGlibmJ5cW1ocHV5Y2R2amRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1OTM5NzAsImV4cCI6MjA2MzE2OTk3MH0.lGZtDKfug7eJtAoIxca-4Ardu-AtXqD5IWpR9fxaki0"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
        