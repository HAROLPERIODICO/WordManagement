import React, { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");
  const [esRegistro, setEsRegistro] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, password }),
      });

      const data = await res.json();

      if (data.success) {
        onLoginSuccess(data.user);
      } else {
        setError("Correo o contraseña incorrectos.");
      }
    } catch (err) {
      setError("Error de conexión con el servidor.");
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, password }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Usuario registrado con éxito. Ahora inicia sesión.");
        setEsRegistro(false);
        setCorreo("");
        setPassword("");
        setNombre("");
      } else {
        setError(data.message || "Error al registrar.");
      }
    } catch (err) {
      setError("Error de conexión con el servidor.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">
        {esRegistro ? "Registro" : "Iniciar Sesión"}
      </h2>
      <form onSubmit={esRegistro ? handleRegistro : handleLogin}>
        {esRegistro && (
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            required
          />
        )}
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
        >
          {esRegistro ? "Registrarse" : "Entrar"}
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        {esRegistro ? (
          <>
            ¿Ya tienes cuenta?{" "}
            <button
              onClick={() => setEsRegistro(false)}
              className="text-blue-600 underline"
            >
              Inicia sesión
            </button>
          </>
        ) : (
          <>
            ¿No tienes cuenta?{" "}
            <button
              onClick={() => setEsRegistro(true)}
              className="text-blue-600 underline"
            >
              Regístrate
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default Login;
