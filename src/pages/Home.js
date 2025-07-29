import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <div className="hero-section">
            <h1>Princy Rilan</h1>
            <h2>Développeur FullStack JS</h2>

            <div className="intro">
              <p className="tagline">
                "Passionné par la création d'expériences web modernes et
                performantes"
              </p>
              <p className="bio">
                Développeur FullStack spécialisé en React, NestJS et
                technologies modernes. Je transforme vos idées en solutions
                digitales innovantes.
              </p>
            </div>

            <div className="stats">
              <div className="stat-item">
                <span className="number">3+</span>
                <span className="label">Années d'expérience</span>
              </div>
              <div className="stat-item">
                <span className="number">5+</span>
                <span className="label">Projets réalisés</span>
              </div>
              <div className="stat-item">
                <span className="number">100%</span>
                <span className="label">Clients satisfaits</span>
              </div>
            </div>

            <div className="skills-preview">
              <h3>Technologies principales</h3>
              <div className="tech-stack">
                <span className="tech-item">React</span>
                <span className="tech-item">NestJS</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">Express</span>
              </div>
            </div>

            <div className="availability">
              <div className="status-indicator">
                <span className="status-dot available"></span>
                <span>Disponible pour de nouveaux projets</span>
              </div>
            </div>

            <div className="quick-actions">
              <a
                href="./media/CV-Princy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn primary"
              >
                <i className="fas fa-download"></i>
                Télécharger CV
              </a>
              <NavLink to="/portfolio" className="action-btn secondary">
                <i className="fas fa-briefcase"></i>
                Mes projets
              </NavLink>
              <NavLink to="/contact" className="action-btn tertiary">
                <i className="fas fa-envelope"></i>
                Me contacter
              </NavLink>
            </div>

            <div className="quick-contact">
              <h3>Travaillons ensemble</h3>
              <div className="contact-methods">
                <a
                  href="mailto:princyandrianantenaina@yahoo.com"
                  className="contact-item"
                >
                  <i className="fas fa-envelope"></i>
                  <span>princyandrianantenaina@yahoo.com</span>
                </a>
                <a href="#" className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+261 34 47 270 12</span>
                </a>
                <a
                  href="https://linkedin.com/in/princy-andrianantenaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
