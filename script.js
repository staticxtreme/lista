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
