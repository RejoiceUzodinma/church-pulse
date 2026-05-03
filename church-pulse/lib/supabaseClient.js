import { createClient } from '@supabase/supabase-js';

// Replace these with your actual details from Supabase
const supabaseUrl = 'https://wmoqcbfhjnpcrkbzepvn.supabase.co';
const supabaseKey = 'neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtb3FjYmZoam5wY3JrYnplcHZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTEzMTIsImV4cCI6MjA5MTMyNzMxMn0.tajBj7Pthv27ukvAbVVomrFliclkw_Z0CHaWuTpVr58';

export const supabase = createClient(supabaseUrl, supabaseKey);