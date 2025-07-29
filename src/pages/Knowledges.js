import React, { useState } from "react";
import Navigation from "../components/Navigation";

const Knowledges = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const skillsData = [
    // Frontend
    {
      category: "Frontend",
      skills: [
        {
          name: "React",
          icon: "fab fa-react",
          color: "#61DAFB",
        },
        {
          name: "Angular",
          icon: "fab fa-angular",
          color: "#DD0031",
        },
        {
          name: "Vue.js",
          icon: "fab fa-vuejs",
          color: "#4FC08D",
        },
        {
          name: "JavaScript",
          icon: "fab fa-js",
          color: "#F7DF1E",
        },
        {
          name: "HTML/CSS",
          icon: "fab fa-html5",
          color: "#E34F26",
        },
        {
          name: "Bootstrap",
          icon: "fab fa-bootstrap",
          color: "#7952B3",
        },
      ],
    },
    // Backend
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "fab fa-node-js",
          color: "#339933",
        },
        {
          name: "Express",
          icon: "fas fa-server",
          color: "#000000",
        },
        {
          name: "NestJS",
          icon: "fas fa-layer-group",
          color: "#E0234E",
        },
        {
          name: "PHP",
          icon: "fab fa-php",
          color: "#777BB4",
        },
        {
          name: "Laravel",
          icon: "fab fa-laravel",
          color: "#FF2D20",
        },
        {
          name: "CodeIgniter",
          icon: "fas fa-fire",
          color: "#EF4223",
        },
        {
          name: "Python",
          icon: "fab fa-python",
          color: "#3776AB",
        },
        {
          name: "Django",
          icon: "fas fa-code",
          color: "#092E20",
        },
      ],
    },
    // Base de données
    {
      category: "Base de données",
      skills: [
        {
          name: "MongoDB",
          icon: "fas fa-database",
          color: "#47A248",
        },
        {
          name: "MySQL",
          icon: "fas fa-database",
          color: "#4479A1",
        },

        {
          name: "Redis",
          icon: "fas fa-memory",
          color: "#DC382D",
        },
      ],
    },
    // Outils & Collaboration
    {
      category: "Outils & Collaboration",
      skills: [
        {
          name: "GitHub",
          icon: "fab fa-github",
          color: "white",
        },
        {
          name: "GitLab",
          icon: "fab fa-gitlab",
          color: "#FCA326",
        },
        {
          name: "Slack",
          icon: "fab fa-slack",
          color: "white",
        },

        {
          name: "Docker",
          icon: "fab fa-docker",
          color: "#2496ED",
        },
      ],
    },
  ];

  const categories = ["Tous", ...skillsData.map((section) => section.category)];

  const filteredSkills =
    activeCategory === "Tous"
      ? skillsData
      : skillsData.filter((section) => section.category === activeCategory);

  const getOverallStats = () => {
    const allSkills = skillsData.flatMap((section) => section.skills);
    return {
      totalSkills: allSkills.length,
      categories: skillsData.length,
    };
  };

  const stats = getOverallStats();

  return (
    <div className="knowledges">
      <Navigation />

      <div className="knowledgesContent">
        <div className="content">
          <div className="hero-section">
            <h1>Mes Compétences</h1>
            <p className="subtitle">Technologies et outils maîtrisés</p>

            {/* Statistiques générales */}
            <div className="stats-overview">
              <div className="stat-card">
                <div className="stat-number">{stats.totalSkills}</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{stats.categories}</div>
                <div className="stat-label">Catégories</div>
              </div>
            </div>
          </div>

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

          {/* Sections de compétences */}
          <div className="skills-sections">
            {filteredSkills.map((section, sectionIndex) => (
              <div key={section.category} className="knowledge-section">
                <h2>
                  <span className="section-number">0{sectionIndex + 1}</span>
                  {section.category}
                </h2>

                <div className="skills-grid">
                  {section.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-card">
                      <div className="skill-content">
                        <div
                          className="skill-icon"
                          style={{ color: skill.color }}
                        >
                          <i className={skill.icon}></i>
                        </div>
                        <h3>{skill.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledges;
