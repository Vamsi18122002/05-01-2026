import React, { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment {count}
      </button>
      <Child onClick={handleClick} />
    </>
  );
}

export default Parent;

   