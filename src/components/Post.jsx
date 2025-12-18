import React, { useState } from "react";
import { deletePost, addComment, deleteComment } from "../services/api";

const Post = ({ post, loadPosts }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment) return;
    const data = await addComment(post._id, { author: "Moi", text: newComment }); // changer author quand on merge pour mettre nom utilisateur
    if (!data.error) {
      setNewComment("");
      loadPosts();
    } else alert(data.message);
  };

  const handleDeletePost = async () => {
    if (window.confirm("TEST MESSAGE WINDOWS : SUPPRRIMER CE POST??")) {
      const data = await deletePost(post._id);
      if (!data.error) loadPosts();
      else alert(data.message);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (window.confirm("TEST MESSAGE WINDOWS : SUPPRRIMER CE COMMENTAIRE ??")) {
      const data = await deleteComment(post._id, commentId);
      if (!data.error) loadPosts();
      else alert(data.message);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <p><strong>{post.author}</strong></p>
      <p>{post.content}</p>
      {post.image && <img src={`http://localhost:3000${post.image}`} alt="post" style={{ maxWidth: "200px" }} />}
      <button onClick={handleDeletePost}>Supprimer le post</button>

      <div style={{ marginTop: 10 }}>
        <h4>Commentaires</h4>
        {post.comments.map((c) => (
          <div key={c._id}>
            <strong>{c.author}</strong>: {c.text}{" "}
            <button onClick={() => handleDeleteComment(c._id)}>Supprimer</button>
          </div>
        ))}
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            placeholder="Ajouter un commentaire"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Commenter</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
