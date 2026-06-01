import { useState } from "react";

// HOC
function withCounter(WrappedComponent) {
  return function EnhancedComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        count={count}
        increment={increment}
      />
    );
  };
}

// Component
function ClickCounter({ count, increment }) {
  return (
    <button onClick={increment}>
      Clicked {count} times
    </button>
  );
}

// Wrap Component with HOC
const EnhancedClickCounter = withCounter(ClickCounter);

// App Component
function K() {
  return (
    <div>
      <h1>Higher Order Component (HOC)</h1>
      <EnhancedClickCounter />
    </div>
  );
}

export default K;