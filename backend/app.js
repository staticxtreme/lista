require('dotenv').config();
const express = require('express');
const { pool } = require('./database');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Permitir CORS para desarrollo y producción
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Endpoint para DataTables
app.get('/data.json', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, descripcion, "aplica para", "precios de 500", "precios de 300 a 500" FROM lista'
    );
    res.json({ data: result.rows });
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});