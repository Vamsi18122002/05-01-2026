import React, { useState } from "react";

function Header() {
  console.log("Header Rendered");
  return <h1>My App</h1>;
}

function Sidebar() {
  console.log("Sidebar Rendered");
  return <h2>Sidebar</h2>;
}

function Content({ count }) {
  console.log("Content Rendered");
  return <h2>Count: {count}</h2>;
}

function Footer() {
  console.log("Footer Rendered");
  return <h3>Footer</h3>;
}

function A() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Header />
      <Sidebar />
      <Content count={count} />
      <Footer />

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default A;