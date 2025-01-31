import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email content
    const emailSubject = "Novo Contato - Expert Vision";
    const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Mensagem: ${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:contato@expertvision.com.br?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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
                  href="mailto:contato@expertvision.com.br"
                  className="contato-method"
                >
                  <FaEnvelope className="contato-icon" />
                  <span>contato@expertvision.com.br</span>
                </a>
                <a href="tel:+5554999062213" className="contato-method">
                  <FaPhone className="contato-icon" />
                  <span>+55 (54) 99906-2213</span>
                </a>
                <div className="contato-method">
                  <FaMapMarkerAlt className="contato-icon" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            <form className="contato-page-form" onSubmit={handleSubmit}>
              <div className="contato-form-row">
                <div className="contato-form-group">
                  <div className="contato-input-wrapper">
                    <FaUser className="contato-input-icon" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
