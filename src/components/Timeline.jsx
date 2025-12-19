import React, { useEffect, useState } from "react";
import Post from "./Post";
import { fetchPosts, createPost } from "../services/api";

const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  const loadPosts = async () => {
    setLoading(true);
    const data = await fetchPosts();
    if (!data.error) setPosts(data.data);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("author", "Moi");
    formData.append("content", newPostContent);
    if (newPostImage) formData.append("image", newPostImage);

    const data = await createPost(formData);
    if (!data.error) {
      setNewPostContent("");
      setNewPostImage(null);
      loadPosts();
    } else {
      alert(data.message);
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
