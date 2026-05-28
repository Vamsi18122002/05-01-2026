import React, { useState, useMemo } from "react";

export default function M() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>{expensiveCalculation}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}