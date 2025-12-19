const API_URL = "http://localhost:3000/posts";
const BASE_URL = "http://localhost:3000";
//envoyer requests posts get delete
export const fetchPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error(`GET /posts -> ${res.status}`);
  return handleResponse(res);
};

export const createPost = async (formData) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error(`POST /posts -> ${res.status}`);
  return handleResponse(res);
};

export const deletePost = async (postId) => {
  const res = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`DELETE /posts/${postId} -> ${res.status}`);
  return handleResponse(res);
};

export const addComment = async (postId, comment) => {
  const res = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
  if (!res.ok) throw new Error(`POST comment -> ${res.status}`);
  return handleResponse(res);
};

export const deleteComment = async (postId, commentId) => {
  const res = await fetch(
    `${BASE_URL}/posts/${postId}/comments/${commentId}`,
    { method: "DELETE" }
  );
  if (!res.ok) throw new Error(`DELETE comment -> ${res.status}`);
  return handleResponse(res);
};