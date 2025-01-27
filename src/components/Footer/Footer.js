import React from "react";
import "./Footer.css";
import { FaHeart } from "react-icons/fa";
import Logo from "../../assets/images/EXPERT VISION_Amarelo e Branco.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={Logo} alt="Expert Vision Logo" className="footer-logo" />
        <p className="footer-text">
          Desenvolvido com <FaHeart className="footer-heart" /> pela Expert
          Vision
        </p>
        <p className="footer-copyright">
          © 2025 Expert Vision. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
