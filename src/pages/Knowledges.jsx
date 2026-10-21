import { useMemo, useState } from "react";
import Meters from "../components/Meters";
import Radar from "../components/Radar";
import { player } from "../data/player";
import { skillsData } from "../data/skills";

export default function Knowledges() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const categories = ["Tous", ...skillsData.map((section) => section.category)];

  const filtered = useMemo(
    () =>
      activeCategory === "Tous"
        ? skillsData
        : skillsData.filter((section) => section.category === activeCategory),
    [activeCategory]
  );

  const total = skillsData.reduce((sum, section) => sum + section.skills.length, 0);

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Stack</p>
        <h1>Compétences</h1>
        <p>
          Six axes de travail, puis {total} technologies réparties en {skillsData.length} familles.
        </p>
      </header>

      <div className="board board-page">
        <Radar attributes={player.attributes} />
        <Meters attributes={player.attributes} />
      </div>

      <div className="filters" role="tablist" aria-label="Familles">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? "active" : ""}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="locker">
        {filtered.map((section) => (
          <section key={section.category}>
            <h2>{section.category}</h2>
            <ul>
              {section.skills.map((skill) => (
                <li key={skill.name}>
                  <i className={skill.icon} style={{ color: skill.color }} aria-hidden="true" />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
