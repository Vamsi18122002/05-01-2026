import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      <h1>The Conditional Rendering Concept in React</h1>

      <h2>I. Ternary Operator in JSX</h2>
      <p>{isLoggedIn ? "Welcome User" : "Please Login"}</p>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Change Login Status
      </button>

      <h2>II. Logical && Operator</h2>

      {showMessage && <p>This message is visible using && operator</p>}

      <button onClick={() => setShowMessage(!showMessage)}>
        Show / Hide Message
      </button>
    </div>
  );
}

export default App;