import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SpaceParticles from "../../components/Particles/SpaceParticles";
import "./SobreNos.css";
import {
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const SobreNos = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: "Inovação",
      description:
        "Buscamos constantemente novas soluções e tecnologias para entregar os melhores resultados.",
    },
    {
      icon: <FaRocket />,
      title: "Excelência",
      description:
        "Comprometidos com a qualidade e a entrega de soluções que superam expectativas.",
    },
    {
      icon: <FaHandshake />,
      title: "Parceria",
      description:
        "Construímos relacionamentos duradouros baseados em confiança e transparência.",
    },
    {
      icon: <FaChartLine />,
      title: "Resultados",
      description:
        "Focados em gerar valor real e impacto positivo para nossos clientes.",
    },
  ];

  return (
    <div className="sobre-nos-page">
      <Navbar />
      <main className="sobre-nos-main">
        <section className="sobre-nos-hero">
          <div className="sobre-nos-hero-content">
            <h1 className="sobre-nos-hero-title">Sobre Nós</h1>
            <p className="sobre-nos-hero-subtitle">
              Transformando ideias em realidade digital com inovação e
              excelência
            </p>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-container">
            <div className="mission-content">
              <h2 className="section-title">Nossa Missão</h2>
              <p className="section-text">
                Capacitar empresas através da tecnologia, fornecendo soluções
                digitais inovadoras que impulsionam o crescimento e a
                transformação dos negócios.
              </p>
            </div>
            <div className="vision-content">
              <h2 className="section-title">Nossa Visão</h2>
              <p className="section-text">
                Ser referência em desenvolvimento de soluções digitais,
                reconhecida pela excelência, inovação e impacto positivo que
                geramos para nossos clientes.
              </p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2 className="section-title">Nossos Valores</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                className="value-card"
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <div className="team-container">
            <h2 className="section-title">Nossa História</h2>
            <div className="team-content">
              <p className="section-text">
                A Expert Vision nasceu da paixão por tecnologia e da vontade de
                fazer a diferença no mundo digital. Desde nossa fundação, temos
                nos dedicado a criar soluções inovadoras que transformam a
                maneira como as empresas interagem com seus clientes e operam
                seus negócios.
              </p>
              <p className="section-text">
                Com uma equipe altamente qualificada e comprometida, trabalhamos
                incansavelmente para entregar projetos que não apenas atendam,
                mas superem as expectativas de nossos clientes. Nossa jornada é
                marcada por desafios superados e conquistas compartilhadas com
                aqueles que confiam em nosso trabalho.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SpaceParticles />
    </div>
  );
};

export default SobreNos;
