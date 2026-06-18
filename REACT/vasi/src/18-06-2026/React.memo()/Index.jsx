import React, { useState } from "react";
import Child1 from "./Child1";

function Index() {
  const [count, setCount] = useState(0);

  console.log("App Rendered");

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>  Increment  </button>

      <Child1 />
    </div>
  );
}

export default Index;