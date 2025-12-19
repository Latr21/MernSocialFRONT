import React from "react";
import { Routes, Route, Navigate, NavLink, useLocation } from "react-router-dom";

import Home from "./screens/Home";
import CreateInformationAccueil from "./screens/CreateInformationAccueil";
import InformationsAccueilAdmin from "./screens/InformationsAccueilAdmin";
import Timeline from "./components/Timeline";

import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function Navbar() {
  const location = useLocation();
  const hideOnAuthPages = ["/sign-in", "/sign-up"].includes(location.pathname);
  if (hideOnAuthPages) return null;

  const linkStyle = ({ isActive }) => ({
    marginRight: 12,
    textDecoration: "none",
    fontWeight: isActive ? "700" : "400",
  });

  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ddd", marginBottom: 12 }}>
      <NavLink to="/" style={linkStyle}>Accueil</NavLink>
      <NavLink to="/timeline" style={linkStyle}>Timeline</NavLink>
      <NavLink to="/creer-info" style={linkStyle}>Créer info</NavLink>
      <NavLink to="/gestion-infos" style={linkStyle}>Admin infos</NavLink>
      <NavLink to="/profile" style={linkStyle}>Profil</NavLink>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creer-info" element={<CreateInformationAccueil />} />
        <Route path="/gestion-infos" element={<InformationsAccueilAdmin />} />
        <Route path="/timeline" element={<Timeline />} />

        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}