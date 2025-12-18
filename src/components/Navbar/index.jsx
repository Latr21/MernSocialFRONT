import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => (
  <NavLink className={({ isActive }) => `${isActive && "transparent"}`} to={to}>
    {children}
  </NavLink>
);

const Navbar = () => {
  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <NavLinkComponent to="/">Accueil</NavLinkComponent>
      <NavLinkComponent to="/news">Actualités</NavLinkComponent>
      <NavLinkComponent to="/my-list">Ma liste</NavLinkComponent>
      <NavLinkComponent to="/profile/JohnDoe">Profil</NavLinkComponent>
    </nav>
  );
};

export default Navbar;
