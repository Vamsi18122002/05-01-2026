import React from "react";

function M({ onClick }) {
  console.log("M Rendered");

  return (
    <div>
      <button onClick={onClick}>Button</button>
    </div>
  );
}

export default M;