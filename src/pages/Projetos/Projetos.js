import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SpaceParticles from "../../components/Particles/SpaceParticles";
import "./Projetos.css";
import seucursodigitalImage from "../../assets/images/projetos-seucursodigital.png";
import larhubImage from "../../assets/images/projetos-larhub.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projetos = () => {
  const projects = [
    {
      title: "Seu Curso Digital",
      description:
        "Plataforma de cursos online que se dedica a transformar vidas por meio da educação gratuita e acessível.",
      image: seucursodigitalImage,
      tags: ["React", "Firebase"],
      demoLink: "https://seucursodigital.vercel.app",
      type: "Plataforma de Cursos Online",
    },
    {
      title: "LarHub",
      description:
        "Plataforma de gerenciamento imobilário que permite gerenciar imóveis de forma eficiente e segura.",
      image: larhubImage,
      tags: ["React", "Firebase", "Tailwind"],
      demoLink: "https://larhub.vercel.app",
      type: "Plataforma de Gerenciamento Imobiliário",
    },
    // Add more projects here
  ];

  return (
    <div className="projeto-page-container">
      <Navbar />
      <main className="projeto-page-main">
        <section className="projeto-page-hero">
          <h1 className="projeto-page-hero-title">Nossos Projetos</h1>
          <p className="projeto-page-hero-subtitle">
            Conheça alguns dos projetos que desenvolvemos com dedicação e
            excelência
          </p>
        </section>

        <section className="projeto-page-grid">
          {projects.map((project, index) => (
            <div
              className="projeto-page-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="projeto-page-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projeto-page-image"
                />
                <div className="projeto-page-overlay">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projeto-page-link"
                  >
                    Ver Projeto <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="projeto-page-info">
                <span className="projeto-page-type">{project.type}</span>
                <h3 className="projeto-page-title">{project.title}</h3>
                <p className="projeto-page-description">
                  {project.description}
                </p>
                <div className="projeto-page-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="projeto-page-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
      <SpaceParticles />
    </div>
  );
};

export default Projetos;
