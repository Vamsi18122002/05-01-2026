import React from 'react'
function Profile({ role, setPage }) {
  return (
    <div>
      <h1>{role} Profile Page</h1>

      <button onClick={() => setPage("home")}>
        Logout
      </button>
    </div>
  );
}

export default Profile;

