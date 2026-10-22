import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { player } from "../data/player";

const SUBJECT = "Proposition de contrat";
const MESSAGE = `Bonjour Princy,

Je vous contacte pour une proposition de contrat. Le besoin porte sur du développement fullstack JavaScript.

Je reste disponible pour en parler.`;

export default function RecruitModal({ onClose }) {
  const onCloseRef = useRef(onClose);
  const [status, setStatus] = useState("idle");
  onCloseRef.current = onClose;

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKey);
    const name = document.querySelector(".recruit-modal input[name='name']");
    name?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, []);

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

  return createPortal(
    <div
      className="recruit-layer"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="recruit-modal" role="dialog" aria-modal="true" aria-labelledby="recruit-title">
        <div className="recruit-head">
          <h2 id="recruit-title">Recruter</h2>
          <button type="button" className="recruit-close" onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </div>
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
            <input name="subject" type="text" required defaultValue={SUBJECT} />
          </label>
          <label>
            Message
            <textarea name="message" required rows={6} defaultValue={MESSAGE} />
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
              L'envoi a échoué. Écrivez à <a href={`mailto:${player.email}`}>{player.email}</a>.
            </p>
          )}
        </form>
      </div>
    </div>,
    document.body
  );
}
