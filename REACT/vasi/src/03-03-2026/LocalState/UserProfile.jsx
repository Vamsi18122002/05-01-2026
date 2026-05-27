import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "vasikar",
    age: "22"
  });

  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <button onClick={()=>setUser({name:"vasi",age:23})}>Click</button>
    </div>
  );
}

export default UserProfile;