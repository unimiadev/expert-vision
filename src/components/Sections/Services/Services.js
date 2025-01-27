import React from "react";
import "./Services.css";
import {
  FaCode,
  FaShoppingCart,
  FaMobile,
  FaDigitalTachograph,
  FaCogs,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Desenvolvimento de Software Personalizado",
      description:
        "Soluções sob medida para atender às necessidades específicas do seu negócio, com foco em escalabilidade e performance.",
    },
    {
      icon: <FaShoppingCart />,
      title: "Criação de Sites e E-commerce",
      description:
        "Desenvolvimento de websites modernos e lojas virtuais otimizadas para conversão e experiência do usuário.",
    },
    {
      icon: <FaMobile />,
      title: "Desenvolvimento de Aplicativos Mobile",
      description:
        "Apps nativos e multiplataforma que proporcionam a melhor experiência para seus usuários em qualquer dispositivo.",
    },
    {
      icon: <FaDigitalTachograph />,
      title: "Consultoria em Transformação Digital",
      description:
        "Orientação estratégica para modernizar seus processos e adaptar seu negócio à era digital.",
    },
    {
      icon: <FaCogs />,
      title: "Integração de Sistemas e Automação de Processos",
      description:
        "Otimização de fluxos de trabalho através da integração de sistemas e automação de processos repetitivos.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Nossos Serviços</h2>
        <p className="services-subtitle">
          Soluções tecnológicas completas para impulsionar seu negócio
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
