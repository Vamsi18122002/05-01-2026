import React, { useState } from "react";
import Child from './Child'
export default function App() {
  const [count, setCount] = useState(0);
    console.log("B is Rendered")
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
      <Child/>
    </div>
  );
}


