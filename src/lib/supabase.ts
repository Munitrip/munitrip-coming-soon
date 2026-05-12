import { createClient } from '@supabase/supabase-js';

// Extrae las credenciales del archivo .env
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Crea el cliente de conexión
export const supabase = createClient(supabaseUrl, supabaseKey);
