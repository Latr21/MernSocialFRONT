import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./screens/Home";
import CreateInformationAccueil from "./screens/CreateInformationAccueil";
import InformationsAccueilAdmin from "./screens/InformationsAccueilAdmin";
import Timeline from "./components/Timeline";

import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" replace />} />
      <Route path="/creer-info" element={<CreateInformationAccueil />} />
      <Route path="/gestion-infos" element={<InformationsAccueilAdmin />} />
      <Route path="/timeline" element={<Timeline />} />

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="*" element={<Navigate to="/sign-in" replace />} />
    </Routes>
  );
}