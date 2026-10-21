import { Link } from "react-router-dom";
import Meters from "../components/Meters";
import PlayerCard from "../components/PlayerCard";
import Radar from "../components/Radar";
import { byRecent, portfolioData } from "../data/portfolioData";
import { player } from "../data/player";

const companies = new Set(portfolioData.map((item) => item.company).filter(Boolean)).size;
const latest = byRecent().slice(0, 3);

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
            <p className="position-line">{player.role}</p>
            <p className="tagline">{player.tagline}</p>
            <p className="bio">{player.bio}</p>

            <div className="hero-actions">
              <a className="btn btn-gold" href={player.cv} target="_blank" rel="noopener noreferrer">
                Télécharger le CV
              </a>
              <Link className="btn btn-ghost" to="/carriere">
                Carrière
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Me contacter
              </Link>
            </div>

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

      <div className="lower">
        <section className="playstyles" aria-label="Façon de travailler">
          <p className="eyebrow">Méthode</p>
          <h2>Façon de travailler</h2>
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
            <p className="eyebrow">Carrière</p>
            <h2>Projets récents</h2>
          </div>
          <Link className="btn btn-ghost" to="/carriere">
            Voir tout
          </Link>
        </div>
        <ul>
          {latest.map((project) => (
            <li key={project.id}>
              <Link to={`/carriere#match-${project.id}`}>
                <span className={`bug ${project.status === "En cours" ? "is-live" : ""}`}>
                  {project.status === "En cours" ? "En cours" : "Terminé"}
                </span>
                <span className="season">{project.year}</span>
                <strong>{project.name}</strong>
                <em>{project.company || project.category}</em>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
