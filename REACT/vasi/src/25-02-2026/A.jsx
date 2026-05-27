import axios from "axios";
import { useState } from "react";
function A() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);

  const handleLogin = () => {
    axios.post("https://jsonplaceholder.typicode.com/albums", {
      Email: email,
      Password: password
    })
    .then(res => {
      console.log("Created:", res.data);

      return axios.get("https://jsonplaceholder.typicode.com/albums");
    })
    .then(res => {
      console.log("Fetched:", res.data);
      setMessage("Post Created & Data Fetched");
    })
    .catch(err => {
      console.log(err);
      setMessage("Error in POST/GET");
    });
  };
  const handleUpdate = () => {
    axios.put("https://jsonplaceholder.typicode.com/albums/1", {
      username: "vasi",
      userId: 1
    })
    .then(res => {
      console.log("Updated:", res.data);
      setData(res.data);
      setMessage("Post Updated Successfully");
    })
    .catch(err => {
      console.log(err);
      setMessage("Update Failed");
    });
  };
  const handleDelete = () => {
    axios.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(res => {
      console.log("Deleted:", res.data);
      setData(null);
      setMessage("Post Deleted Successfully");
    })
    .catch(err => {
      console.log(err);
      setMessage("Delete Failed");
    });
  };
  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)}  placeholder="Email" type="email"  />
      <input  onChange={(e) => setPassword(e.target.value)}  placeholder="Password" type="password"  />
      <br /><br />
      <button onClick={handleLogin}>LOGIN</button>
      <button onClick={handleUpdate}>PUT</button>
      <button onClick={handleDelete}>DELETE</button>
      <p>{message}</p>
      {data && (
        <div>
          <h3>Updated Data:</h3>
          <p><strong>User ID:</strong> {data.userId}</p>
          <p><strong>Username:</strong> {data.username}</p>
          <p><strong>ID:</strong> {data.id}</p>
        </div>
      )}
    </div>
  );
}

export default A;