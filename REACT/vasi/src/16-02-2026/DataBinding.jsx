import { useState } from "react";

function DataBinding() {
  const [name, setName] = useState("");
let a = 7435;
  return (
    <div>
        <h2>One way Data Binding</h2>
        <h3>{a}</h3>

      <h2>Two Way Data Binding</h2>
      <input type="text" value={name}  onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default DataBinding;
