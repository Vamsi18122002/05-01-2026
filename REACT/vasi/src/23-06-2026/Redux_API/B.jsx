import { useDispatch, useSelector } from "react-redux";

function B() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Redux_API - Count : {count}</h1>

      <button onClick={() =>
            dispatch({ type: "Increment",  payload: 10, }) } > 
            Increment
      </button>

      <button onClick={() =>
            dispatch({ type: "Decrement", payload: 5, }) } >
            Decrement
      </button>
    </div>
  );
}

export default B;