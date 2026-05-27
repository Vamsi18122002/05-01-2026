import React, { memo } from "react";

function ChildComponent({ name, handleClick }) {
  console.log("Child Component Rendered");

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h2>Child Component</h2>

      <p>Name: {name}</p>

      <button onClick={handleClick}>
        Child Button
      </button>
    </div>
  );
}

export default memo(ChildComponent);