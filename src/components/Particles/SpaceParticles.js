import React, { useEffect, useRef } from "react";
import "./SpaceParticles.css";

const SpaceParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = Math.random() > 0.5 ? "#F28705" : "#003366";
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle =
          this.color +
          Math.floor(this.opacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 40; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0; // Reset shadow for clearing

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Draw connections between nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            ctx.beginPath();
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, particle.color + "40");
            gradient.addColorStop(1, particles[j].color + "40");

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    setTimeout(() => {
      resizeCanvas();
      init();
      animate();
    }, 100);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="space-particles" />;
};

export default SpaceParticles;
