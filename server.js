require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS para desarrollo local
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/data.json', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, descripcion, aplica_para, mas_de_500, de_300_a_500 FROM lista');
    res.json({ data: rows });
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ error: 'Error al obtener datos', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
