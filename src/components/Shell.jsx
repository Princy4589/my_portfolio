import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { player } from "../data/player";
import BootScreen from "./BootScreen";

const links = [
  { to: "/", label: "Profil" },
  { to: "/attributs", label: "Compétences" },
  { to: "/carriere", label: "Projets" },
  { to: "/contact", label: "Contact" },
];

const titles = {
  "/": "Princy Rilan — Développeur fullstack",
  "/attributs": "Compétences — Princy Rilan",
  "/carriere": "Projets — Princy Rilan",
  "/contact": "Contact — Princy Rilan",
};

function shouldBoot() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return sessionStorage.getItem("fiche-kickoff") !== "1";
  } catch {
    return true;
  }
}

const sparks = Array.from({ length: 16 }, (_, index) => index);

function readTheme() {
  try {
    return localStorage.getItem("fiche-theme") === "madrid" ? "madrid" : "barca";
  } catch {
    return "barca";
  }
}

export default function Shell() {
  const location = useLocation();
  const bootOnce = useRef(shouldBoot()).current;
  const [overlay, setOverlay] = useState(bootOnce);
  const [entered, setEntered] = useState(!bootOnce);
  const [premiere, setPremiere] = useState(false);
  const [turn, setTurn] = useState(false);
  const [theme, setTheme] = useState(readTheme);
  const firstPath = useRef(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const color = theme === "madrid" ? "#f7f4ec" : "#07111f";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", color);
    try {
      localStorage.setItem("fiche-theme", theme);
    } catch {
      /* le choix reste pour cette visite */
    }
  }, [theme]);

  useEffect(() => {
    document.title = titles[location.pathname] || "Princy Rilan — Page introuvable";
    if (!location.hash) window.scrollTo(0, 0);
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    setTurn(true);
  }, [location.pathname, location.hash]);

  const reveal = () => {
    setEntered(true);
    setPremiere(true);
    window.setTimeout(() => setOverlay(false), 760);
    window.setTimeout(() => setPremiere(false), 2400);
  };

  const onGlow = (event) => {
    event.currentTarget.style.setProperty("--mx", `${event.clientX}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY}px`);
  };

  return (
    <div
      className={`app${entered ? " is-entered" : ""}${premiere ? " is-premiere" : ""}${overlay ? " is-booting" : ""}`}
      onMouseMove={onGlow}
    >
      {overlay && <BootScreen onDone={reveal} />}
      {premiere && (
        <>
          <div className="kick-flash" aria-hidden="true" />
          <div className="spark-field" aria-hidden="true">
            {sparks.map((spark) => (
              <i key={spark} />
            ))}
          </div>
        </>
      )}

      <header className="topbar">
        <div className="brand-block">
          <NavLink className="brand" to="/" end>
            <span>PR</span>
            Portfolio
          </NavLink>
          <div className="theme-switch" role="group" aria-label="Thème">
            <button
              type="button"
              aria-pressed={theme === "barca"}
              onClick={() => setTheme("barca")}
            >
              Barça
            </button>
            <button
              type="button"
              aria-pressed={theme === "madrid"}
              onClick={() => setTheme("madrid")}
            >
              Madrid
            </button>
          </div>
        </div>
        <p className="top-club">{player.club}</p>
        <p className={`status-pill ${player.available ? "is-on" : ""}`}>
          <i />
          {player.available ? "Disponible" : "En mission"}
        </p>
        <p className="top-direct">
          <a href={`tel:${player.phone}`}>{player.phoneDisplay}</a>
          <a href={`mailto:${player.email}`}>{player.email}</a>
        </p>
      </header>

      <main className="stage">
        <div key={location.pathname} className={turn ? "route is-turn" : "route"}>
          <Outlet />
        </div>
      </main>

      <nav className="dock" aria-label="Sections">
        {links.map((link, index) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => `dock-link${isActive ? " active" : ""}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
