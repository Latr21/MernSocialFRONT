import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import NewsList from "./screens/NewsList";
import Profile from "./screens/Profile";
import MyList from "./screens/MyList";

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<h1>Bienvenue sur la page d'accueil</h1>} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/404" element={<h1>Page introuvable</h1>} />
          {/* Exemple avec et sans navigate */}
          <Route path="*" element={<Navigate to={"/404"} replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
