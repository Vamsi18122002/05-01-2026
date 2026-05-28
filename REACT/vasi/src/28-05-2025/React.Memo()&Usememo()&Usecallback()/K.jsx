import React from "react";

const K = React.memo(({ handleClick }) => {
  console.log(" K is Rendered");

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
});

export default K;



