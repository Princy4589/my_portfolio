import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Détecter le scroll pour les effets visuels
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { path: "/", icon: "fas fa-home", label: "Accueil" },
    { path: "/competences", icon: "fas fa-code", label: "Compétences" },
    { path: "/portFolio", icon: "fas fa-briefcase", label: "Expériences" },
    { path: "/contact", icon: "fas fa-envelope", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/princy-andrianantenaina",
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      href: "https://github.com/princy-andrianantenaina",
      icon: "fab fa-github",
      label: "GitHub",
      color: "#181717",
    },
    {
      href: "mailto:princyandrianantenaina@yahoo.com",
      icon: "fas fa-envelope",
      label: "Email",
      color: "#D44638",
    },
  ];

  return (
    <>
      {/* Menu burger pour mobile */}
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay pour mobile */}
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`sidebar ${isMobileMenuOpen ? "mobile-open" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        {/* Section Profile */}
        <div className="id">
          <div className="idContent">
            <div className="profile-wrapper">
              <img src="./media/pdp.jpg" alt="Princy RILAN Profile" />
              <div className="status-indicator">
                <span className="status-dot"></span>
              </div>
            </div>
            <h3>Princy RILAN</h3>
            <p className="job-title">Développeur FullStack</p>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="navigation">
          <ul>
            {navigationItems.map((item, index) => (
              <li key={item.path} style={{ animationDelay: `${index * 0.1}s` }}>
                <NavLink
                  exact
                  to={item.path}
                  activeClassName="navActive"
                  className="nav-link"
                >
                  <div className="nav-content">
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                  </div>
                  <div className="nav-indicator"></div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Social & Footer */}
        <div className="socialNetwork">
          <div className="social-header">
            <h4>Restons connectés</h4>
          </div>
          <ul>
            {socialLinks.map((social, index) => (
              <li
                key={social.href}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ "--social-color": social.color }}
                >
                  <i className={social.icon}></i>
                  <span className="social-tooltip">{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="signature">
            <p>© 2025 Portfolio</p>
            <p className="version">v2.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
