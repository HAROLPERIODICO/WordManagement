const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");

router.post("/login", login);

module.exports = router;

// Ruta para registrar un nuevo usuario
router.post("/register", (req, res) => {
  const { nombre, correo, password } = req.body;

  const sql = "INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)";
  db.query(sql, [nombre, correo, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ success: false, message: "El correo ya está registrado." });
      }
      return res.status(500).json({ success: false, message: "Error en el servidor." });
    }
    res.json({ success: true });
  });
});

