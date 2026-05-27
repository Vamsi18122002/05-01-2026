import React from "react";
import { useSelector, useDispatch } from "react-redux";

function C() {
  const sum = useSelector((state) => state.sum); 
  const dispatch = useDispatch(); 

  return (
    <div>
      <h2>{sum}</h2>

      <button onClick={() => dispatch({ type: "a" })}>
        Inc
      </button>

      <button onClick={() => dispatch({ type: "b" })}>
        Dec
      </button>
    </div>
  );
}

export default C;