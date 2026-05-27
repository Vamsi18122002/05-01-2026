import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  // GET
  const getPosts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setPosts(data.slice(0, 5));
  };
  // POST
  const createPost = async () => {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "New Post",
        body: "Hello!"
      })
    });
    alert("Post Created ");
  };
  // PUT
  const updatePost = async () => {
    await fetch(`${API_URL}/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Updated Title",
        body: "Updated Content"
      })
    });
    alert("Post Fully Updated ");
  };
  // PATCH
  const patchPost = async () => {
    await fetch(`${API_URL}/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Title Changed Only"
      })
    });
    alert("Post Partially Updated ");
  };
  // DELETE
  const deletePost = async () => {
    await fetch(`${API_URL}/1`, {
      method: "DELETE"
    });
    alert("Post Deleted ");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>API Methods Demo</h2>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={getPosts}>Get Posts</button>
        <button onClick={createPost}>Create Post</button>
        <button onClick={updatePost}>Update Full Post</button>
        <button onClick={patchPost}>Update Title Only</button>
        <button onClick={deletePost}>Delete Post</button>
      </div>

      <h3>Posts:</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;