document.addEventListener('DOMContentLoaded', () => {
  $('#myTable').DataTable({
    ajax: 'http://localhost:3000/data.json', // Cambia el puerto si tu backend usa otro
    columns: [
      { data: 'id' },
      { data: 'descripcion' },
      { data: 'aplica para' },
      { data: 'precios de 500' },
      { data: 'precios de 300 a 500' },
    ]
  });
});

import { createClient } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
async function fetchData() {
  const { data, error } = await supabase
  .from('#myTable')
  .select('*');

  if (error) {
    console.error('Error fetching data:', error);
      console.log('Data:', data);
  }
}

fetchData();

function initSupabase() {
  const supabase = createClient('https://ylndxlqluaofpuzrovne.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsbmR4bHFsdWFvZnB1enJvdm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTI0MTQsImV4cCI6MjA1ODU2ODQxNH0.UohpsTt2BIervDO06RbNLVaE2fnO2D9TGTVYdncwsSo'); //solo existe dentro de la funcion
}
initSupabase();
supabase.from('tabla').select(); //Error: supabase no esta definido

let supabase;

function initSupabase() {
  supabase = createClient('https://ylndxlqluaofpuzrovne.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsbmR4bHFsdWFvZnB1enJvdm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTI0MTQsImV4cCI6MjA1ODU2ODQxNH0.UohpsTt2BIervDO06RbNLVaE2fnO2D9TGTVYdncwsSo')
}
initSupabase();