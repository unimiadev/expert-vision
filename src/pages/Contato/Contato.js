import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SpaceParticles from "../../components/Particles/SpaceParticles";
import "./Contato.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaComments,
} from "react-icons/fa";

const Contato = () => {
  return (
    <div className="contato-page">
      <Navbar />
      <main className="contato-main">
        <section className="contato-hero">
          <h1 className="contato-hero-title">Entre em Contato</h1>
          <p className="contato-hero-subtitle">
            Estamos prontos para transformar suas ideias em realidade
          </p>
        </section>

        <section className="contato-content-section">
          <div className="contato-content-container">
            <div className="contato-info-wrapper">
              <h2 className="contato-info-title">Fale Conosco</h2>
              <p className="contato-info-text">
                Entre em contato conosco para discutir seu próximo projeto ou
                tirar qualquer dúvida. Estamos aqui para ajudar!
              </p>
              <div className="contato-methods">
                <a
                  href="mailto:contato@expertvision.com"
                  className="contato-method"
                >
                  <FaEnvelope className="contato-icon" />
                  <span>contato@expertvision.com</span>
                </a>
                <a href="tel:+5511999999999" className="contato-method">
                  <FaPhone className="contato-icon" />
                  <span>+55 (11) 99999-9999</span>
                </a>
                <div className="contato-method">
                  <FaMapMarkerAlt className="contato-icon" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            <form className="contato-page-form">
              <div className="contato-form-row">
                <div className="contato-form-group">
                  <div className="contato-input-wrapper">
                    <FaUser className="contato-input-icon" />
                    <input
                      type="text"
                      placeholder="Seu Nome"
                      className="contato-input"
                      required
                    />
                  </div>
                </div>
                <div className="contato-form-group">
                  <div className="contato-input-wrapper">
                    <FaEnvelope className="contato-input-icon" />
                    <input
                      type="email"
                      placeholder="Seu Email"
                      className="contato-input"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="contato-form-group">
                <div className="contato-input-wrapper contato-textarea-wrapper">
                  <FaComments className="contato-input-icon" />
                  <textarea
                    placeholder="Sua Mensagem"
                    className="contato-textarea"
                    required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="contato-submit-button">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <SpaceParticles />
    </div>
  );
};

export default Contato;
