// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <nav>
            <ul className="space-y-2">
              <li><a href="#indicadores" className="hover:text-blue-400">Indicadores</a></li>
              <li><a href="#nosotros" className="hover:text-blue-400">Nosotros</a></li>
              <li><a href="#status" className="hover:text-blue-400">Estatus</a></li>
              <li><a href="#programacion" className="hover:text-blue-400">Programación</a></li>
              <li><a href="#re" className="hover:text-blue-400">RE</a></li>
              <li><a href="#backlog" className="hover:text-blue-400">BACKLOG</a></li>
              <li><a href="#inspecciones" className="hover:text-blue-400">Inspecciones</a></li>
            </ul>
          </nav>

          <div className="space-y-4">
            <a
              href="https://www.linkedin.com/company/chm-sas/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <FaFacebookF /> Linkedin
            </a>

            <a
              href="https://www.instagram.com/chmmineria?igsh=NzZvbDVrb3NobGRt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-400"
            >
              <FaInstagram /> Instagram
            </a>

            <a
              href="https://wa.me/573167543109"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        {/* WhatsApp flotante */}
        <a
          href="https://wa.me/573167543109"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
          aria-label="Chatea por WhatsApp"
        >
          <FaWhatsapp className="text-white text-xl" />
        </a>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        <p><strong>powered by HD SOFTWARE SOLUTIONS</strong> &copy; 2025 | Todos los derechos reservados.</p>
      </div>

      <div className="fixed bottom-4 right-4 z-50 group">
      <a
        href="https://wa.me/573167543109"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
        aria-label="Chatea por WhatsApp"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>
      <span className="absolute right-14 bottom-1/2 translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Chatea con el asistente!
      </span>
    </div>

    </footer>
  );
};

export default Footer;