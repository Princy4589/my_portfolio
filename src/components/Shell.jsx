import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { player } from "../data/player";
import BootScreen from "./BootScreen";

const links = [
  { to: "/", label: "Profil", icon: "fas fa-id-card" },
  { to: "/attributs", label: "Compétences", icon: "fas fa-chart-bar" },
  { to: "/carriere", label: "Carrière", icon: "fas fa-briefcase" },
  { to: "/contact", label: "Contact", icon: "fas fa-paper-plane" },
];

const titles = {
  "/": "Princy Rilan — Développeur fullstack",
  "/attributs": "Compétences — Princy Rilan",
  "/carriere": "Carrière — Princy Rilan",
  "/contact": "Contact — Princy Rilan",
};

function shouldBoot() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return sessionStorage.getItem("fiche-boot") !== "1";
  } catch {
    return true;
  }
}

export default function Shell() {
  const location = useLocation();
  const [booting, setBooting] = useState(shouldBoot);

  useEffect(() => {
    document.title = titles[location.pathname] || "Princy Rilan — Page introuvable";
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  const onGlow = (event) => {
    event.currentTarget.style.setProperty("--mx", `${event.clientX}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY}px`);
  };

  return (
    <div className={`app ${booting ? "is-booting" : ""}`} onMouseMove={onGlow}>
      {booting && <BootScreen onDone={() => setBooting(false)} />}

      <header className="topbar">
        <p className="brand">
          <span>PR</span>
          Portfolio
        </p>
        <p className="top-club">{player.club}</p>
        <p className={`status-pill ${player.available ? "is-on" : ""}`}>
          <i />
          {player.available ? "Disponible" : "En mission"}
        </p>
      </header>

      <main className="stage">
        <Outlet />
      </main>

      <nav className="dock" aria-label="Sections">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => `dock-link${isActive ? " active" : ""}`}
          >
            <i className={link.icon} aria-hidden="true" />
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
