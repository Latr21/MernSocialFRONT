const API_URL = "http://localhost:3000";

export const recupererInformationsAccueil = async () => {
  const res = await fetch(`${API_URL}/informations-accueil`);
  const json = await res.json();
  if (json.error) throw new Error(json.message);
  return json.data;
};
export const creerInformationAccueil = async (formData) => {
  const res = await fetch(`${API_URL}/informations-accueil`, {
    method: "POST",
    body: formData,
  });

  const json = await res.json();
  if (json.error) throw new Error(json.message);
  return json.data;
};
export const supprimerInformationAccueil = async (id) => {
  const res = await fetch(`${API_URL}/informations-accueil/${id}`, {
    method: "DELETE",
  });
  const json = await res.json();
  if (json.error) throw new Error(json.message);
  return true;
};

export const modifierInformationAccueil = async (id, { titre, description, image }) => {
  const formData = new FormData();
  if (titre !== undefined) formData.append("titre", titre);
  if (description !== undefined) formData.append("description", description);
  if (image) formData.append("image", image);

  const res = await fetch(`${API_URL}/informations-accueil/${id}`, {
    method: "PATCH",
    body: formData,
  });

  const json = await res.json();
  if (json.error) throw new Error(json.message);
  return json.data;
};