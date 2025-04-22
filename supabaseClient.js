//inicializar supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ylndxlqluaofpuzrovne.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsbmR4bHFsdWFvZnB1enJvdm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTI0MTQsImV4cCI6MjA1ODU2ODQxNH0.UohpsTt2BIervDO06RbNLVaE2fnO2D9TGTVYdncwsSo';
const supabase = createClient(supabaseUrl, supabaseKey);

//leer datos de tabla
async function getUsuarios() {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .select('*');
  
      if (error) {
        console.error("Error:", error.message);
        return null;
      }
      console.log("Usuarios:", data);
      return data;
    } catch (err) {
      console.error("Excepción:", err);
      return null;
    }
  }
  
  export { getUsuarios };