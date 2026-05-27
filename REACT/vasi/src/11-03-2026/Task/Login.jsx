import { useState } from "react";

function Login({ role, setPage }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake login success
    setPage("profile");
  };

  return (
    <div>
      <h2>{role} Login</h2>

      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
