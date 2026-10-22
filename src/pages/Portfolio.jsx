import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { byRecent } from "../data/portfolioData";

const filters = [
  { id: "Tous", label: "Tous" },
  { id: "Projet Entreprise", label: "Entreprise" },
  { id: "Projet de Stage", label: "Stage" },
  { id: "Projet Universitaire", label: "Université" },
];

function codeLink(url) {
  if (!url || url.includes("github.com/username")) return null;
  return url;
}

export default function Portfolio() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("Tous");
  const sorted = useMemo(() => byRecent(), []);
  const [openId, setOpenId] = useState(() => sorted[0]?.id ?? null);

  const filtered = useMemo(
    () =>
      activeCategory === "Tous"
        ? sorted
        : sorted.filter((project) => project.category === activeCategory),
    [activeCategory, sorted]
  );

  useEffect(() => {
    const id = Number(location.hash.replace("#match-", ""));
    if (filtered.some((project) => project.id === id)) {
      setOpenId(id);
      document.getElementById(`match-${id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      setOpenId(filtered[0]?.id ?? null);
    }
  }, [filtered, location.hash]);

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Expériences</p>
        <h1>Projets</h1>
        <p>Les projets, du plus récent au plus ancien. Ouvrez une carte pour le détail.</p>
      </header>

      <div className="filters" role="tablist" aria-label="Catégories">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={activeCategory === filter.id ? "active" : ""}
            aria-pressed={activeCategory === filter.id}
            onClick={() => setActiveCategory(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="count">
        {filtered.length} projet{filtered.length > 1 ? "s" : ""}
      </p>

      <div className="matches" key={activeCategory}>
        {filtered.map((project) => {
          const open = openId === project.id;
          const live = project.status === "En cours";
          const github = codeLink(project.links?.github);
          return (
            <details
              key={project.id}
              id={`match-${project.id}`}
              className={`match${open ? " is-open" : ""}`}
              open={open}
            >
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setOpenId(open ? null : project.id);
                }}
              >
                <span className="season">{project.year}</span>
                <span className="match-title">
                  <span className={`bug ${live ? "is-live" : ""}`}>
                    {live ? "En cours" : "Terminé"}
                  </span>
                  <strong>{project.name}</strong>
                  <em>
                    {[project.company || project.category, project.duration]
                      .filter(Boolean)
                      .join(" · ")}
                  </em>
                </span>
                <i className={`fas fa-chevron-down chev ${open ? "is-open" : ""}`} aria-hidden="true" />
              </summary>

              <div className="match-body">
                {project.role && (
                  <p>
                    Poste : <strong>{project.role}</strong>
                  </p>
                )}
                <p>{project.context}</p>
                <p>{project.info}</p>

                {project.achievements?.length > 0 && (
                  <div>
                    <h3>Réalisations</h3>
                    <ul>
                      {project.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <ul className="chips">
                  {project.languages.map((language, index) => (
                    <li key={`${language}-${index}`}>{language}</li>
                  ))}
                </ul>

                <div className="match-links">
                  {project.isPublic && project.links?.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      Voir le projet
                    </a>
                  )}
                  {project.isPublic && github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      Code source
                    </a>
                  )}
                  {!project.isPublic && (
                    <p className="confidential">
                      {project.confidentialNote || project.stageReport || "Projet confidentiel."}
                    </p>
                  )}
                  {project.isPublic && project.confidentialNote && (
                    <p className="confidential">{project.confidentialNote}</p>
                  )}
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
