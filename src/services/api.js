const BASE_URL = "http://localhost:3000";

export const fetchPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error(`GET /posts -> ${res.status}`);
  return res.json();
};

export const createPost = async ({ author, content, image }) => {
  const formData = new FormData();
  formData.append("author", author);
  formData.append("content", content);
  if (image) formData.append("image", image);

  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: formData,
  });
  
  const data = await res.json();
  
  if (!res.ok) {
    throw new Error(data.message || `POST /posts -> ${res.status}`);
  }
  
  return data;
};

export const deletePost = async (postId) => {
  const res = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`DELETE /posts/${postId} -> ${res.status}`);
  return res.json();
};

export const addComment = async (postId, comment) => {
  const res = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
  if (!res.ok) throw new Error(`POST comment -> ${res.status}`);
  return res.json();
};

export const deleteComment = async (postId, commentId) => {
  const res = await fetch(`${BASE_URL}/posts/${postId}/comments/${commentId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`DELETE comment -> ${res.status}`);
  return res.json();
};
