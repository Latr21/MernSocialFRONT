import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import CreateInformationAccueil from "./screens/CreateInformationAccueil";
import InformationsAccueilAdmin from "./screens/InformationsAccueilAdmin";
<Route path="/creer-info" element={<CreateInformationAccueil />} />
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creer-info" element={<CreateInformationAccueil />} />
          <Route path="/gestion-infos" element={<InformationsAccueilAdmin />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
