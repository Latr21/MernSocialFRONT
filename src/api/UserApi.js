const API_URL = "http://localhost:3000";

export async function getMe(token) {
  const res = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Erreur lors de la récupération du profil");
  }

  return data;
}

export async function getUserPosts(userId, token) {
  const res = await fetch(`${API_URL}/users/${userId}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Erreur lors de la récupération des posts");
  }


  return data; 
}
