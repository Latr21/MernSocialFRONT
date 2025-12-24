import React, { useEffect, useState } from "react";
import Post from "./Post";
import { fetchPosts, createPost } from "../services/api";

const Timeline = () => {
  console.log(" TEST TIME LINE CHARGEMENET")
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);
  useEffect(() => {
    console.log("useeffect test");
    loadPosts();
  }, []);
const loadPosts = async () => {
  console.log(" loadPosts TEST ")
  setLoading(true);
  try {
    const data = await fetchPosts();
    
    if (!data.error) setPosts(data.data);
  } catch (error) {
    console.error("Erreur loadPosts:", error);
  }
  setLoading(false);
};

const handleCreatePost = async (e) => {
  e.preventDefault();

  try {
    const data = await createPost({
      author: "Moi",//eventuellement faire lien avec user
      content: newPostContent,
      image: newPostImage,
    });

    console.log("reponse createPost:", data);

    if (!data.error) {
      setNewPostContent("");
      setNewPostImage(null);
      loadPosts();
    }
  } catch (error) {
    console.error("Erreur:", error.message);
    alert(error.message);
  }
};

  return (
    <div>
      <h1>Timeline</h1>
      <form onSubmit={handleCreatePost}>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="test place holder text"
          required
        />
        <input type="file" accept="image/*" onChange={(e) => setNewPostImage(e.target.files[0])} /> 
        <button type="submit">Poster</button>
      </form>

      {loading ? (<p>Chargement...</p>) : 
        (
        posts.map((post) => <Post key={post._id} post={post} loadPosts={loadPosts} />)
      )}
    </div>
  );
};

export default Timeline;
