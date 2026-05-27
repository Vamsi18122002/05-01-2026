import React, { useEffect, useState } from "react";
function AA() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => setUsers(data.slice(0, 5)))
      .catch((err) => setError(err.message));
  }, []);
  const handleAddUser = () => {
    if (!name || !email) return;
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([data, ...users]);
        setName("");
        setEmail("");
      })
      .catch(() => setError("Failed to add user"));
  };
  const handleUpdateUser = () => {
    fetch(`${API_URL}/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(
          users.map((user) =>
            user.id === editingId ? { ...user, name, email } : user
          )
        );
        setEditingId(null);
        setName("");
        setEmail("");
      })
      .catch(() => setError("Failed to update user"));
  };

  const handleDeleteUser = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch(() => setError("Failed to delete user"));
  };

  const handleEditClick = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management App</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {editingId ? (
          <button onClick={handleUpdateUser}>Update</button>
        ) : (
          <button onClick={handleAddUser}>Add</button>
        )}
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleEditClick(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AA;