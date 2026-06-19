import React, { memo } from "react";

function Child({ name, handleClick }) {
  console.log("Child Rendered");

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

      <button onClick={handleClick}> Child Button </button>
    </div>
  );
}

export default memo(Child);