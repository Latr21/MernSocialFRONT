const API_URL = "http://localhost:3000/posts";
//envoyer requests posts get delete
export const fetchPosts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createPost = async (formData) => {
  const res = await fetch(API_URL, { method: "POST", body: formData });
  return res.json();
};

export const deletePost = async (postId) => {
  const res = await fetch(`${API_URL}/${postId}`, { method: "DELETE" });
  return res.json();
};

export const addComment = async (postId, comment) => {
  const res = await fetch(`${API_URL}/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
  return res.json();
};

export const deleteComment = async (postId, commentId) => {
  const res = await fetch(`${API_URL}/${postId}/comments/${commentId}`, { method: "DELETE" });
  return res.json();
};
