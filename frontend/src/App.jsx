// src/App.jsx
import React, { useState } from "react";
import './App.css';

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Indicadores from "./components/Indicadores";
import Status from "./components/Status"; 
import SeccionRE from './components/SeccionRE';
import SeccionBacklog from './components/SeccionBacklog';
import Login from './components/Login';

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <>
      {!usuario ? (
        <Login onLoginSuccess={setUsuario} />
      ) : (
        <>
          <Hero />
          <Indicadores />
          <Nosotros />
          <SeccionRE />
          <SeccionBacklog />
          <Status />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
