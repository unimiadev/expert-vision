import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
import seucursodigitalImage from "../../../assets/images/projetos-seucursodigital.png";
import larhubImage from "../../../assets/images/projetos-larhub.png";

const Projects = () => {
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
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projetos em Destaque</h2>
        <p className="projects-subtitle">
          Conheça alguns dos projetos que desenvolvemos para nossos clientes
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                    <span>Ver Demo</span>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-cta">
          <a href="/projetos" className="portfolio-button">
            Ver Portfólio Completo
            <FaExternalLinkAlt className="button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
