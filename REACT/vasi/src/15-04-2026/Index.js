console.log("API Calls");

// ---------------- FETCH (GET) ----------------
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log("Fetch Data:", data))
  .catch(err => console.error("Fetch Error:", err));

// ---------------- AXIOS (GET) ----------------
axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then(res => console.log("Axios Data:", res.data))
  .catch(err => console.error("Axios Error:", err));

// ================= API METHODS =================
console.log("API Methods");

// POST
axios.post("https://jsonplaceholder.typicode.com/users", {
  name: "John Doe",
  email: "john@example.com"
})
.then(res => console.log("POST:", res.data))
.catch(err => console.error("POST Error:", err));

// PUT
axios.put("https://jsonplaceholder.typicode.com/users/1", {
  name: "Updated Name",
  email: "updated@example.com"
})
.then(res => console.log("PUT:", res.data))
.catch(err => console.error("PUT Error:", err));

//PATCH
axios.patch("https://jsonplaceholder.typicode.com/users/1", {
  name: "Partially Updated"
})
.then(res => console.log("PATCH:", res.data))
.catch(err => console.error("PATCH Error:", err));

// DELETE
axios.delete("https://jsonplaceholder.typicode.com/users/1")
  .then(() => console.log("DELETE: User deleted"))
  .catch(err => console.error("DELETE Error:", err));