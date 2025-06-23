const db = require("../db");

const getUserByEmail = (email, callback) => {
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

module.exports = { getUserByEmail };
