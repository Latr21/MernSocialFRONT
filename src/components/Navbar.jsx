import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: 10 }}>
        Accueil
      </Link>

      <Link to="/timeline" style={{ marginRight: 10 }}>
        Timeline
      </Link>

      <Link to="/creer-info" style={{ marginRight: 10 }}>
        Créer une information
      </Link>

      <Link to="/gestion-infos" style={{ marginRight: 10 }}>
        Admin informations
      </Link>

      <Link to="/profile">
        Profil
      </Link>
    </nav>
  );
}