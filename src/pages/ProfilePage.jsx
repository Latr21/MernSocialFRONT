import React, { useEffect, useState } from "react";
import { getMe, getUserPosts } from "../api/userApi";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfileAndPosts() {
      try {
        console.log("1) Début fetchProfileAndPosts");
        setLoading(true);
        setError("");

        const token = localStorage.getItem("token");
        console.log("2) token =", token);
        if (!token) {
          setError("Vous devez être connecté pour voir votre profil.");
          setLoading(false);
          return;
        }

        const response = await getMe(token);
        console.log("3) getMe OK", response);

        const currentUser = response.data.user;
        console.log("currentUser complet =", currentUser);
        console.log("userId =", currentUser.userId);

        setUser(currentUser);

        const userId = currentUser.userId;
        const postsData = await getUserPosts(userId, token);
        console.log("4) getUserPosts OK", postsData);
        setPosts(postsData || []);
      } catch (err) {
        console.error("Erreur fetchProfileAndPosts", err);
        setError(
          err.message || "Impossible de récupérer le profil ou les posts."
        );
      } finally {
        console.log("5) finally, setLoading(false)");
        setLoading(false);
      }
    }

    fetchProfileAndPosts();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/sign-in";
  }

  if (loading) {
    return <p>Chargement du profil...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!user) {
    return <p>Aucun utilisateur trouvé.</p>;
  }

  return (
    <div>
      <button onClick={handleLogout}>Se déconnecter</button>
      <h1>Mon profil</h1>
      <p>
        <strong>Username :</strong> {user.username}
      </p>
      <p>
        <strong>Email :</strong> {user.email}
      </p>
      {user.bio && (
        <p>
          <strong>Bio :</strong> {user.bio}
        </p>
      )}

      <h2>Mes posts</h2>
      {posts.length === 0 && <p>Aucun post pour l'instant.</p>}
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <p>{post.content}</p>
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
