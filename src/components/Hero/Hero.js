import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import centerImage from "../../assets/images/EXPERT VISION_Amarelo e Branco_Cut.png";
import "./Hero.css";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleMouseMove = (e) => {
      if (isMobile) return; // Don't track mouse on mobile

      const { clientX, clientY } = e;
      const { left, top, width, height } = document
        .querySelector(".hero-title")
        .getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      setMousePosition({ x, y });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          <div className="title-row">
            <span className="word">UNINDO</span>
            <div className="expertise-container">
              <span className="word expertise">EXPERTISE</span>
              <div className="scanning-line" />
              <div className="binary-overlay" aria-hidden="true">
                01000101 01011000 01010000 01000101 01010010 01010100 01001001
                01010011 01000101
              </div>
            </div>
          </div>
          <div className="title-row">
            <span className="word">COM SUA</span>
            <span className="word vision">VISÃO</span>
            <FaEye
              className="eye-icon"
              style={
                !isMobile
                  ? {
                      "--eye-x": `${mousePosition.x * 20}px`,
                      "--eye-y": `${mousePosition.y * 20}px`,
                    }
                  : {}
              }
            />
          </div>
        </h1>
        <p className="hero-subtitle">
          Ferramentas de software de alta qualidade e serviços de
          desenvolvimento
          <br />
          especializados para atender a todas as necessidades do seu projeto.
        </p>
      </div>
      <div className="image-wrapper">
        <div className="particle-field"></div>
        <div className="orbital-ring"></div>
        <div className="orbital-ring"></div>
        <div className="orbital-ring"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <img
          src={centerImage}
          alt="Center"
          className="center-image spinning blur-effect"
        />
      </div>
    </div>
  );
};

export default Hero;
