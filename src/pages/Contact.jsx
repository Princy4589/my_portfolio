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
          <h2>{player.city}</h2>
          <p>{player.nation}</p>
          <ul>
            <li>
              <a href={`tel:${player.phone}`}>{player.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${player.email}`}>{player.email}</a>
            </li>
            <li>
              <a href={player.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={player.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
          <a className="btn btn-gold" href={player.cv} target="_blank" rel="noopener noreferrer">
            Télécharger le CV
          </a>
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
