import { useState } from "react";
import { meterTone } from "../data/player";

const views = [
  { id: "face", label: "Visage" },
  { id: "portrait", label: "Portrait" },
];

const finePointer =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function PlayerCard({ player }) {
  const [photoOk, setPhotoOk] = useState(true);
  const [view, setView] = useState("face");
  const left = player.attributes.slice(0, 3);
  const right = player.attributes.slice(3);

  const onMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--ry", `${x * 9}deg`);
    card.style.setProperty("--rx", `${-y * 9}deg`);
  };

  const onLeave = (event) => {
    event.currentTarget.style.setProperty("--ry", "0deg");
    event.currentTarget.style.setProperty("--rx", "0deg");
  };

  return (
    <article
      className="player-card"
      onMouseMove={finePointer ? onMove : undefined}
      onMouseLeave={finePointer ? onLeave : undefined}
    >
      <div className="card-stripe" aria-hidden="true" />
      <div className="card-top">
        <div>
          <p className="ovr">{player.experienceLabel}</p>
          <p className="pos">ans</p>
        </div>
        <div className="card-side">
          <span className="tier">Fullstack</span>
        </div>
      </div>

      <div className={`photo-frame is-${view}`}>
        {photoOk ? (
          <div className="shot">
            <img
              src={player.photo}
              width="1086"
              height="1448"
              alt={`Portrait de ${player.firstName} ${player.lastName}`}
              onError={() => setPhotoOk(false)}
            />
          </div>
        ) : (
          <span className="initials">PR</span>
        )}
      </div>
      <div className="view-toggle" role="group" aria-label="Cadrage de la photo">
        {views.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={view === item.id}
            onClick={() => setView(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="card-name">
        {player.firstName}
        <span>{player.lastName}</span>
      </p>
      <p className="card-role">
        {player.role}
        <span>
          {player.city} · {player.nation}
        </span>
      </p>

      <div className="mini-stats">
        {[left, right].map((column) => (
          <ul key={column[0].key}>
            {column.map((attr) => (
              <li key={attr.key}>
                <span>{attr.label}</span>
                <strong className={meterTone(attr.value)}>{attr.value}</strong>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p className="card-club">{player.club}</p>
    </article>
  );
}
