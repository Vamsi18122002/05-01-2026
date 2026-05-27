import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

 const handleLogin = () => {

  axios.post("https://jsonplaceholder.typicode.com/posts", {
    Email: email,
    Password: password
  })
  .then(res => {
    console.log("Created:", res.data);

   
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  })
  .then(res => {
    console.log("All Posts:", res.data);
    setMessage("Post Created & Data Fetched");
  })
  .catch(err => {
    console.log(err);
    setMessage("Error");
  });

};

  return (
    <>
      <input 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" type="email"
      />
      <input 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        type="password"
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </>
  );
}

export default Login;