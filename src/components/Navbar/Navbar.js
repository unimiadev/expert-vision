import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
import logo from "../../assets/images/EXPERT VISION_Amarelo e Branco.png";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolling(scrollPosition > 50);
      setIsAtTop(scrollPosition < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "visible";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <nav
      className={`navbar ${isScrolling ? "scrolling" : ""} ${
        isAtTop ? "at-top" : ""
      }`}
    >
      <div className="navbar-container">
        <div className="nav-content">
          <div className="logo-container">
            <img src={logo} alt="Expert Vision Logo" className="navbar-logo" />
          </div>

          <button
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a href="/projetos" className="nav-link">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a href="/sobre-nos" className="nav-link">
                Sobre Nós
              </a>
            </li>
            <li className="nav-item">
              <a href="/contato" className="nav-link">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <img
            src={logo}
            alt="Expert Vision Logo"
            className="mobile-menu-logo"
          />
          <button
            className="close-button"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <IoClose className="close-icon" />
          </button>
        </div>

        <ul className="mobile-nav-menu">
          <li className="mobile-nav-item">
            <a href="/" className="mobile-nav-link" onClick={closeMenu}>
              Início
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/projetos" className="mobile-nav-link" onClick={closeMenu}>
              Projetos
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/sobre-nos" className="mobile-nav-link" onClick={closeMenu}>
              Sobre Nós
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/contato" className="mobile-nav-link" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
