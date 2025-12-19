import React, { useEffect, useState } from "react";
import {
  recupererInformationsAccueil,
  supprimerInformationAccueil,
  modifierInformationAccueil,
} from "../services/informationsAccueil.api";

const API_URL = "http://localhost:3000";

export default function InformationsAccueilAdminPanel() {
  const [infos, setInfos] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  const [editId, setEditId] = useState(null);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const charger = async () => {
    setChargement(true);
    setErreur("");
    try {
      const data = await recupererInformationsAccueil();
      setInfos(data);
    } catch (e) {
      setErreur(e.message);
    } finally {
      setChargement(false);
    }
  };

  useEffect(() => {
    charger();
  }, []);

  const lancerEdition = (info) => {
    setEditId(info._id);
    setTitre(info.titre || "");
    setDescription(info.description || "");
    setImage(null);
  };

  const annulerEdition = () => {
    setEditId(null);
    setTitre("");
    setDescription("");
    setImage(null);
  };

  const onSupprimer = async (id) => {
    try {
      await supprimerInformationAccueil(id);
      setInfos((prev) => prev.filter((i) => i._id !== id));
    } catch (e) {
      alert(e.message);
    }
  };

  const onSauvegarder = async () => {
    try {
      const updated = await modifierInformationAccueil(editId, {
        titre,
        description,
        image,
      });

      setInfos((prev) => prev.map((i) => (i._id === editId ? updated : i)));
      annulerEdition();
    } catch (e) {
      alert(e.message);
    }
  };

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <>
      

      <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
        {infos.map((info) => (
          <div
            key={info._id}
            style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}
          >
            {info.image_url && (
              <img
                src={`${API_URL}${info.image_url}`}
                alt={info.titre}
                style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            )}

            {editId === info._id ? (
              <>
                <input
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  placeholder="Titre"
                  style={{ width: "100%", marginTop: 8 }}
                />

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  style={{ width: "100%", marginTop: 8 }}
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  style={{ marginTop: 8 }}
                />

                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <button onClick={onSauvegarder}>Sauvegarder</button>
                  <button onClick={annulerEdition}>Annuler</button>
                </div>
              </>
            ) : (
              <>
                <h3 style={{ marginTop: 8 }}>{info.titre}</h3>
                <p>{info.description}</p>

                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => lancerEdition(info)}>Modifier</button>
                  <button onClick={() => onSupprimer(info._id)}>Supprimer</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}