import React, { useState } from "react";

const HOC = (WrappedComponent) => {

  return function EnhancedComponent(props) {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prev) => prev + 1);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
};

export default HOC;