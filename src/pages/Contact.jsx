import { useState } from "react";
import { player } from "../data/player";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Écrire</p>
        <h1>Contact</h1>
        <p>Un projet ou une mission. Le message m'arrive directement par email.</p>
      </header>

      <div className="contact-grid">
        <aside className="contact-card">
          <p className="eyebrow">Coordonnées</p>
          <p className="contact-place">
            <strong>{player.city}</strong>
            <span>{player.nation}</span>
          </p>
          <nav className="contact-links" aria-label="Coordonnées">
            <div className="contact-line">
              <a href={`tel:${player.phone}`} aria-label="Appeler">
                <i className="fas fa-phone" aria-hidden="true" />
              </a>
              <a
                href={`https://wa.me/${player.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
              </a>
              <a href={`tel:${player.phone}`}>{player.phoneDisplay}</a>
            </div>
            <a href={`mailto:${player.email}`}>
              <i className="fas fa-envelope" aria-hidden="true" />
              <span>{player.email}</span>
            </a>
            <a href={player.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a href={player.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </nav>
        </aside>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Nom
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Sujet
            <input name="subject" type="text" required defaultValue="Prise de contact" />
          </label>
          <label>
            Message
            <textarea name="message" required rows={6} />
          </label>
          <button className="btn btn-gold" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Envoi…" : "Envoyer"}
          </button>
          {status === "sent" && (
            <p className="form-status" role="status">
              Message envoyé. Je réponds à l'adresse indiquée.
            </p>
          )}
          {status === "error" && (
            <p className="form-status is-error" role="alert">
              L'envoi a échoué. Écrivez à{" "}
              <a href={`mailto:${player.email}`}>{player.email}</a>.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
