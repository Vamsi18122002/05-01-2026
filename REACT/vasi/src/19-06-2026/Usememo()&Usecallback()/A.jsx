import React, { useState, useCallback } from "react";
import Child from "./Child";

function A() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert("Button Clicked!");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>memo(): useMemo is used to memoize a calculated value so that expensive computations are  not repeated on every render.
         and 
         useCallback(): useCallback is used to memoize a function so that React doesn't create a new function on every render.</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <Child
        name="React User"
        handleClick={handleClick}
      />
    </div>
  );
}

export default A;