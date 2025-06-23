require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { correo, password } = req.body;
  const sql = "SELECT * FROM usuarios WHERE correo = ? AND password = ?";
  db.query(sql, [correo, password], (err, results) => {
    if (err) return res.status(500).json({ success: false });
    if (results.length > 0) {
      return res.json({ success: true, user: results[0] });
    } else {
      return res.json({ success: false });
    }
  });
});

app.post("/api/register", (req, res) => {
  const { nombre, correo, password } = req.body;
  const sql = "INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)";
  db.query(sql, [nombre, correo, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ success: false, message: "Correo ya registrado" });
      }
      return res.status(500).json({ success: false });
    }
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend en puerto ${PORT}`);
});
