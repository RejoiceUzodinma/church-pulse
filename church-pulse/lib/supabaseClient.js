import { createClient } from '@supabase/supabase-js';

// Replace these with your actual details from Supabase
const supabaseUrl = 'https://wmoqcbfhjnpcrkbzepvn.supabase.co';
const supabaseKey = 'sb_publishable_hJgprX55jvcgyCHjCGCgWA_A0KTnyxU';

export const supabase = createClient(supabaseUrl, supabaseKey);