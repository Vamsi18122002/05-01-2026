import React from "react";
import C from "./C";

const Child1 = React.memo(() => {
  console.log("Child1 Rendered");

  return (
    <div>
      <h1>Child1 Component</h1>
      <C />
    </div>
  );
});

export default Child1;