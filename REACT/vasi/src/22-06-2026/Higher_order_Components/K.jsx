import React from "react";
import HOC from "./HOC";

function K({ count, incrementCount }) {

  return (
    <div>

      <h1>Counter using HOC</h1>

      <h2>{count}</h2>

      <button onClick={incrementCount}>
        Increment
      </button>

    </div>
  );
}

export default HOC(K);