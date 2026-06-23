import { useState } from "react";
import { getUsers, createUser, updateUser, patchUser, deleteUser } from "./API";

function Users() {
  const [response, setResponse] = useState(null);

  const handleGetUsers = async () => {
    const data = await getUsers();
    setResponse(data);
  };

  const handleCreateUser = async () => {
    const data = await createUser({
      name: "vamsi",
      email: "malluvamsikumar@gmail.com",
    });
    setResponse(data);
  };

  const handleUpdateUser = async () => {
    const data = await updateUser(1, {
      name: "Updated-Vamsi",
      email: "updated-malluvamsikumar@gmail.com",
    });
    setResponse(data);
  };

  const handlePatchUser = async () => { 
    const data = await patchUser(1, { 
      name: "Patched-Vamsi",
    });
    setResponse(data);
  };

  const handleDeleteUser = async () => {
    const data = await deleteUser(1);
    setResponse(data);
  };

  return (
    <div>
      <button onClick={handleGetUsers}>GET</button>
      <button onClick={handleCreateUser}>POST</button>
      <button onClick={handleUpdateUser}>PUT</button>
      <button onClick={handlePatchUser}>PATCH</button>
      <button onClick={handleDeleteUser}>DELETE</button>

      <h3>API Response</h3>

      <pre>
        {response
          ? JSON.stringify(response, null, 2)
          : "Click a button to see the response"}
      </pre>
    </div>
  );
}

export default Users;