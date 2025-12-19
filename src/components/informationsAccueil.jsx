import React, { useEffect, useState } from "react";
import { recupererInformationsAccueil } from "../services/informationsAccueil.api";

export default function InformationsAccueil() {
  const [infos, setInfos] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    recupererInformationsAccueil()
      .then(setInfos)
      .catch((err) => setErreur(err.message))
      .finally(() => setChargement(false));
  }, []);

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <div>
      {infos.map((info) => (
        <div key={info._id}>
          {info.image_url && (
            <img
              src={`http://localhost:3000${info.image_url}`}
              alt={info.titre}
              width="200"
            />
          )}
          <h3>{info.titre}</h3>
          <p>{info.description}</p>
        </div>
      ))}
    </div>
  );
}