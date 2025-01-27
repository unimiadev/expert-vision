import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      name: "Carlos Silva",
      company: "TechBrasil Solutions",
      role: "CEO",
      content:
        "A ExpertVision superou todas as nossas expectativas. O sistema desenvolvido revolucionou nossos processos internos e aumentou significativamente nossa produtividade.",
      rating: 5,
    },
    {
      name: "Ana Beatriz Santos",
      company: "Inova Digital",
      role: "Diretora de Projetos",
      content:
        "Profissionalismo e excelência técnica definem a equipe. O aplicativo móvel que desenvolveram para nossa empresa recebeu feedback extraordinário dos usuários.",
      rating: 5,
    },
    {
      name: "Roberto Oliveira",
      company: "Mercado Express",
      role: "Gerente de Operações",
      content:
        "A implementação do e-commerce transformou nosso negócio. A atenção aos detalhes e o suporte contínuo foram fundamentais para nosso sucesso online.",
      rating: 5,
    },
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <h2 className="reviews-title">O Que Dizem Nossos Clientes</h2>
        <p className="reviews-subtitle">
          Histórias de sucesso de quem confiou em nossa expertise
        </p>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div
              className="review-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FaQuoteLeft className="quote-icon" />
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="review-content">{review.content}</p>
              <div className="reviewer-info">
                <div className="reviewer-name">{review.name}</div>
                <div className="reviewer-role">
                  {review.role} - {review.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
