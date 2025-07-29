import React, { useState, useMemo } from "react";
import Navigation from "../components/Navigation";
import { portfolioData } from "../data/portfolioData";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = [
    "Tous",
    "Projet Entreprise",
    "Projet de Stage",
    "Projet Universitaire",
  ];

  // Fonction de tri par année/mois décroissant
  const sortedProjects = useMemo(() => {
    return [...portfolioData].sort((a, b) => {
      // Tri par année décroissante
      if (a.yearSort !== b.yearSort) {
        return b.yearSort - a.yearSort;
      }
      // Si même année, tri par mois décroissant
      return (b.monthSort || 0) - (a.monthSort || 0);
    });
  }, []);

  const filteredProjects =
    activeCategory === "Tous"
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="portfolio">
      <Navigation />

      <div className="portfolioContent">
        <div className="content">
          <h2>Mes Expériences</h2>
          <p className="timeline-subtitle">
            Projets classés du plus récent au plus ancien
          </p>

          {/* Filtres par catégorie */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Timeline indicator */}
          <div className="timeline-header">
            <i className="fas fa-clock"></i>
            <span>
              Chronologie : {filteredProjects.length} projet
              {filteredProjects.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="projects">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project ${project.category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {/* Timeline indicator pour le premier projet de chaque année */}
                {index === 0 ||
                filteredProjects[index - 1].yearSort !== project.yearSort ? (
                  <div className="year-separator">
                    <span className="year-badge">{project.yearSort}</span>
                  </div>
                ) : null}

                {/* Header avec catégorie et année */}
                <div className="project-header">
                  <div className="category-badge">
                    <span className="category">{project.category}</span>
                    <span className="year">{project.year}</span>
                  </div>
                  {project.duration && (
                    <span className="duration">{project.duration}</span>
                  )}
                  <div className="project-number">
                    #{filteredProjects.length - index}
                  </div>
                </div>

                {/* Titre et statut */}
                <h3>{project.name}</h3>
                {project.status && (
                  <div
                    className={`project-status ${project.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    <i
                      className={
                        project.inProgress
                          ? "fas fa-spinner"
                          : "fas fa-check-circle"
                      }
                    ></i>
                    <span>{project.status}</span>
                  </div>
                )}

                {/* Contexte */}
                <p className="context">{project.context}</p>
                {project.role && (
                  <p className="role">
                    Rôle : <strong>{project.role}</strong>
                  </p>
                )}

                {/* Description */}
                <p className="project-description">{project.info}</p>

                {/* Réalisations */}
                {project.achievements && (
                  <div className="achievements">
                    <h4>Réalisations clés :</h4>
                    <ul>
                      {project.achievements.map(
                        (achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="technologies">
                  <h4>Technologies :</h4>
                  <ul className="tech-list">
                    {project.languages.map((lang, langIndex) => (
                      <li key={langIndex} className="tech-item">
                        <i className={project.languagesIcons[langIndex]}></i>
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Liens et actions */}
                <div className="project-actions">
                  {project.isPublic ? (
                    <div className="project-links">
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="demo-link"
                        >
                          <i className="fas fa-external-link-alt"></i>
                          Voir le projet
                        </a>
                      )}
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-link"
                        >
                          <i className="fab fa-github"></i>
                          Code source
                        </a>
                      )}
                      {project.links?.documentation && (
                        <a
                          href={project.links.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="doc-link"
                        >
                          <i className="fas fa-book"></i>
                          Documentation
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="company-project-info">
                      <div className="confidential-badge">
                        <i className="fas fa-building"></i>
                        <span>Projet confidentiel</span>
                      </div>
                      <p className="confidential-note">
                        {project.confidentialNote}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
