import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering</h1>

      {isLoggedIn ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}

      {isLoggedIn && <p>You have successfully logged in.</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
    </div>
  );
}

export default App;