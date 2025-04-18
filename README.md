# Proyecto Node.js + MySQL + DataTables

Este proyecto muestra cómo conectar una base de datos MySQL con Node.js y mostrar los datos en una tabla interactiva usando DataTables.

## Requisitos

- Node.js (v14+)
- MySQL Server

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (ajusta según tu entorno):

   ```
   DB_HOST=127.0.0.1
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=pruebaexcel
   ```

4. Importa la base de datos y la tabla:

   - Abre MySQL Workbench o usa la terminal.
   - Ejecuta el script `estructura_lista.sql` para crear la tabla y datos de ejemplo:
     ```sql
     SOURCE estructura_lista.sql;
     ```

## Uso

1. Inicia el servidor:
   ```
   node app.js
   ```

2. Abre tu navegador en [http://localhost:3000/](http://localhost:3000/) o abre `index.html` directamente si usas archivos estáticos.

## Notas

- No subas tu archivo `.env` a GitHub.
- Puedes modificar el script SQL para agregar más datos de ejemplo.