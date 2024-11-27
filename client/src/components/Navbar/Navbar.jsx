import { useState, useEffect } from "react";
import navStyles from "./Navbar.module.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const a = `block text-white  rounded md:bg-transparent md:hover:text-blue-500 md:p-0 dark:text-white
      
    `;

  // Alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const header = document.querySelector("nav");

    const Evento = () => {
      // Aplica la clase local sticky desde navStyles
      if (window.scrollY > 0) {
        header.classList.add(navStyles.sticky);
      } else {
        header.classList.remove(navStyles.sticky);
      }
    };

    window.addEventListener("scroll", Evento);

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", Evento);
    };
  }, []);

  return (
    <div className={`${navStyles.body}`}>
      <nav className={`${navStyles.navAni}`}>
        <div className={`${navStyles.leftGroup}`}>
          <a
            href="home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./assets/logos/Logo.png"
              className="h-12"
              alt="Flowbite Logo"
            />
            <span className={`${navStyles.span} text-white self-center`}>
              E.C.I.D. Mesa de Cavacas
            </span>
          </a>
        </div>
        <div className={`${navStyles.rightGroup} flex`}>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen} // indica si está expandido
            onClick={toggleMenu}
          >
            {/* <span className="sr-only">Open main menu</span> */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto `}
            id="navbar-default"
          >
            <ul
              className={`font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}
            >
              <li>
                <a
                  href="#"
                  className={`${navStyles.a} ${a}`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className={`${navStyles.a} ${a}`}>
                  Plantilla
                </a>
              </li>
              <li>
                <a href="#" className={`${navStyles.a} ${a}`}>
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className={`${navStyles.a} ${a}`}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
