import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page not-found">
      <p className="eyebrow">404</p>
      <h1>Introuvable</h1>
      <p>Cette adresse ne correspond à aucune page.</p>
      <Link className="btn btn-gold" to="/">
        Retour à l'accueil
      </Link>
    </div>
  );
}
