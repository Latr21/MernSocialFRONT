import React from "react";
import { useState } from "react";
import { creerInformationAccueil } from "../services/informationsAccueil.api";

export default function CreateInformationAccueil() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    if (image) formData.append("image", image);

    await creerInformationAccueil(formData);

    setTitre("");
    setDescription("");
    setImage(null);
  };

  return (
    <div>
      <h1>Créer une information</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Créer</button>
      </form>
    </div>
  );
}