import React from "react";

function GrandChild({ name }) {
  return (
    <div>
      <h4>GrandChild Component</h4>
      <p>User Name: {name}</p>
    </div>
  );
}

export default GrandChild;