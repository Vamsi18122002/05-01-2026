import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => { setCount(count + 1)  };

  return (
    <div>
      <h1>State Lifting</h1>
      <ChildA count={count} increment={increment} />
      <ChildB count={count} />
    </div>
  );
}

export default App;