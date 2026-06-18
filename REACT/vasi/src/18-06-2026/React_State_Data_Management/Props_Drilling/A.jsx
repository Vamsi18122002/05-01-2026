import React from "react";
import Parent from "./Parent";

function A() {
  const userName = "vasikar";

  return (
    <div>
      <h1>Props Drilling</h1>
      <Parent name={userName} />
    </div>
  );
}

export default A;