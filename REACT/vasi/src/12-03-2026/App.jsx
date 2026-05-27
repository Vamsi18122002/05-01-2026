import React, { useState, useEffect } from "react";
import store from "./Store";
import { increment, decrement } from "./actions";

const App = () => {
  const [count, setCount] = useState(store.getState().count);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => store.dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => store.dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default App;