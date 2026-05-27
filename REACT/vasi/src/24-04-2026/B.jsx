import React, { useState, useEffect } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return { count, increment, decrement };
}

function Header() {
  return (
    <header style={{ background: "lightblue", padding: "15px" }}>
      <h1>React Custom Hook and Layout</h1>
    </header>
  );
}

function Sidebar() {
  return (
    <aside
      style={{
        width: "25%",
        background: "lightgray",
        padding: "15px"
      }}
    >
      <h2>Sidebar</h2>
      <p>Menu 1</p>
      <p>Menu 2</p>
      <p>Menu 3</p>
    </aside>
  );
}

function Main() {
  const { count, increment, decrement } = useCounter(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <main style={{ width: "75%", padding: "15px" }}>
      <h2>Custom Hook Example</h2>
      <p>Count: {count}</p>

      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </main>
  );
}

function Footer() {
  return (
    <footer style={{ background: "lightgreen", padding: "15px" }}>
      <h2>Footer</h2>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />

      <div style={{ display: "flex" }}>
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;