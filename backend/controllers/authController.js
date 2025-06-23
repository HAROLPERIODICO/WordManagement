const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUserByEmail } = require("../models/userModel");
require("dotenv").config();

const login = (req, res) => {
  const { email, password } = req.body;

  getUserByEmail(email, (err, user) => {
    if (err || !user) return res.status(401).json({ message: "Usuario no encontrado" });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) return res.status(401).json({ message: "Contraseña incorrecta" });

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ token });
    });
  });
};

module.exports = { login };
