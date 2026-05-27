// export default App;
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = () => {
    setLoading(true);

    setTimeout(() => {
      setUser({
        name: "vamsi",
        role: "Admin",
        notifications: 2,
      });
      setLoading(false);
    }, 2000);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conditional Rendering</h1>

      {/* Loading State */}
      {loading && <h2>Loading...</h2>}

      {/* Not Logged In */}
      {!loading && !user && (
        <div>
          <h2>Please Login</h2>
          <button onClick={loginUser}>Login</button>
        </div>
      )}

      {/* Logged In */}
      {!loading && user && (
        <div>
          <h2>Welcome, {user.name}</h2>

          {/* Role Based Rendering */}
          {user.role === "Admin" ? (
            <p>You have Admin Access</p>
          ) : (
            <p>You are a Normal User</p>
          )}

          {/* Notification Rendering */}
          {user.notifications > 0 && (
            <p>You have {user.notifications} notifications</p>
          )}

          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;