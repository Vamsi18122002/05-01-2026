import React, { useState, useCallback } from "react";
import K from "./K";

export default function Ap() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <K handleClick={handleClick} />
    </div>
  );
}