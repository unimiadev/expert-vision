import React, { useState } from "react";
import {
  FaCalendar,
  FaClock,
  FaEnvelope,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    description: "",
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
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      description: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">Vamos Conversar?</h2>
            <p className="contact-subtitle">
              Agende uma reunião para discutirmos seu projeto e fornecermos uma
              estimativa personalizada.
            </p>
            <div className="contact-methods">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <FaWhatsapp className="contact-icon" />
                <span>WhatsApp Direto</span>
              </a>
              <a
                href="mailto:contato@expertvision.com"
                className="contact-method"
              >
                <FaEnvelope className="contact-icon" />
                <span>contato@expertvision.com</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu e-mail"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <FaWhatsapp className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Seu WhatsApp"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <FaCalendar className="input-icon" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <FaClock className="input-icon" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group full-width">
              <div className="input-wrapper">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descreva brevemente seu projeto"
                  required
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Agendar Reunião
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
