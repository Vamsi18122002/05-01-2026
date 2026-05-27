import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

function B() {
  const [count, setCount] = useState(0);

  // useCallback prevents function recreation
  const handleClick = useCallback(() => {
    alert("Button Clicked!");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>memo() and useCallback() Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <ChildComponent
        name="React User"
        handleClick={handleClick}
      />
    </div>
  );
}

export default B;