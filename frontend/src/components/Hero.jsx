// src/components/Header.jsx
import logo75 from "../assets/logo75.png";
import bandera from "../assets/banderachm.png";
import logochm from "../assets/logochm.png";
const Header = () => {
  return (
    <>
      {/* Logos CHM */}
      {/*<div className="w-full flex justify-between items-center bg-white">

      </div>

      {/* Encabezado principal */}
      <header className="bg-blue-900 text-white shadow-md" id="main-header">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo y título */}
          <h1 className="flex items-center gap-2 text-lg font-semibold">
            <a href="#" className="flex items-center gap-2">
              <img src={logo75} alt="DIS" className="h-20 object-contain" />

              Work Management PALAS CHM Cerrejón
            </a>
          </h1>
        <img src={logochm} alt="DIS" className="fixed left-2 top-2 h-20 object-contain" loading="lazy" />
        <img src={bandera} alt="DIS" className="fixed right-2 top-2 h-20 object-contain" loading="lazy" />
         
          {/* Menú hamburguesa */}
          <button
            className="text-2xl md:hidden"
            id="menu-toggle"
            aria-label="Abrir menú"
          >
            &#9776;
          </button>

        
          {/* Navegación */}
          <nav className="hidden md:flex space-x-6" id="nav">
            <ul className="flex space-x-4" id="menu">
              <li><a href="#indicadores" className="hover:text-yellow-400 hover:underline decoration-sky-500">Indicadores</a></li>
              <li><a href="#nosotros" className="hover:text-yellow-400 hover:underline decoration-sky-500">Nosotros</a></li>
              <li><a href="#status" className="hover:text-yellow-400 hover:underline decoration-sky-500">Estatus</a></li>
              <li><a href="#programacion" className="hover:text-yellow-400 hover:underline decoration-sky-500">Programación</a></li>
              <li><a href="#re" className="hover:text-yellow-400 hover:underline decoration-sky-500">RE</a></li>
              <li><a href="#backlog" className="hover:text-yellow-400 hover:underline decoration-sky-500">BACKLOG</a></li>
              <li><a href="#inspecciones" className="hover:text-yellow-400 hover:underline decoration-sky-500">Inspecciones</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;