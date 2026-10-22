import { Link } from "react-router-dom";
import Meters from "../components/Meters";
import PlayerCard from "../components/PlayerCard";
import Radar from "../components/Radar";
import { byRecent, portfolioData } from "../data/portfolioData";
import { player } from "../data/player";

const companies = new Set(portfolioData.map((item) => item.company).filter(Boolean)).size;
const latest = byRecent().slice(0, 3);
const ribbon = ["React", "NestJS", "Next.js", "Node", "IA générative", "MongoDB", "Docker"];

const actions = [
  { href: "cv", label: "Télécharger le CV", external: true },
  { href: "/carriere", label: "Voir les projets" },
  { href: "/contact", label: "Écrire un message" },
];

export default function Home() {
  return (
    <div className="home">
      <div className="home-grid">
        <PlayerCard player={player} />

        <div className="hero-col">
          <header className="hero">
            <p className="eyebrow">Portfolio · 2026</p>
            <h1>
              <span>{player.firstName}</span>
              <span>{player.lastName}</span>
            </h1>
            <p className="hero-facts">
              <span>{player.role}</span>
              <span>{player.city}</span>
            </p>
            <p className="statement">
              {player.tagline.split(/(?<=\.)\s+/).map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>

            <ul className="quick-stats">
              <li>
                <strong>{player.experienceLabel}</strong>
                <span>années</span>
              </li>
              <li>
                <strong>{portfolioData.length}</strong>
                <span>projets</span>
              </li>
              <li>
                <strong>{companies}</strong>
                <span>entreprises</span>
              </li>
            </ul>

            <nav className="hero-menu" aria-label="Suite">
              {actions.map((action, index) => {
                const order = String(index + 1).padStart(2, "0");
                const inner = (
                  <>
                    <span>{order}</span>
                    <strong>{action.label}</strong>
                    <i aria-hidden="true">→</i>
                  </>
                );
                if (action.external) {
                  return (
                    <a key={action.label} href={player.cv} target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  );
                }
                return (
                  <Link key={action.label} to={action.href}>
                    {inner}
                  </Link>
                );
              })}
            </nav>
          </header>

          <div className="board">
            <Radar attributes={player.attributes} />
            <div>
              <p className="eyebrow">Repères</p>
              <Meters attributes={player.attributes} compact />
            </div>
          </div>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div>
          {[...ribbon, ...ribbon].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <div className="lower">
        <section className="playstyles" aria-label="Façon de travailler">
          <p className="eyebrow">Méthode</p>
          <h2>Quatre réflexes</h2>
          <ul>
            {player.practices.map((style) => (
              <li key={style.name}>
                <i className={style.icon} aria-hidden="true" />
                <div>
                  <strong>{style.name}</strong>
                  <p>{style.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="teasers" aria-label="Projets récents">
        <div className="section-row">
          <div>
            <p className="eyebrow">Projets</p>
            <h2>En ce moment</h2>
          </div>
          <Link className="text-link" to="/carriere">
            Tout voir
          </Link>
        </div>
        <ul className="reel">
          {latest.map((project) => (
            <li key={project.id}>
              <Link to={`/carriere#match-${project.id}`}>
                <span className="reel-year">{project.year}</span>
                <span className="reel-copy">
                  <strong>{project.name}</strong>
                  <em>{project.company || project.category}</em>
                </span>
                <span className={`bug ${project.status === "En cours" ? "is-live" : ""}`}>
                  {project.status === "En cours" ? "En cours" : "Terminé"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
