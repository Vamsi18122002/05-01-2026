import React, { useState, useCallback } from "react";
import M from './M'

function N() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return ( 
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment {count}
      </button>
      <M onClick={handleClick} />
    </>
  );
}

export default N;