import axios from "axios";
import { useState } from "react";

function Update_Delete() {
  const [message, setMessage] = useState("");
  const [updatedData, setUpdatedData] = useState(null);

  const handleUpdate = () => {
    axios.put("https://jsonplaceholder.typicode.com/posts/1", {
      username: "vasi",
      userId: 1
    })
    .then(res => {
      console.log("Updated:", res.data);
      setUpdatedData(res.data);   // store updated data
      setMessage("Post Updated Successfully");
    })
    .catch(err => {
      console.log(err);
      setMessage("Update Failed");
    });
  };

  const handleDelete = () => {
    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => {
      console.log("Deleted:", res.data);
      setUpdatedData(null);  
      setMessage("Post Deleted Successfully");
    })
    .catch(err => {
      console.log(err);
      setMessage("Delete Failed");
    });
  };

  return (
    <>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      
      <p>{message}</p>

      {updatedData && (
        <div>
          <h3>Updated Data:</h3>
          <p><strong>User ID:</strong> {updatedData.userId}</p>
          <p><strong>Username:</strong> {updatedData.username}</p>
          <p><strong>ID:</strong> {updatedData.id}</p>
        </div>
      )}
    </>
  );
}

export default Update_Delete;