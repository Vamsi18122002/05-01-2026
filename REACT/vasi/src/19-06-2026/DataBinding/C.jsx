import React from 'react';
  import { useState } from "react";
  
  function C() {
    const [name, setName] = useState("");
  let a = 47323;
    return (
      <div>
          <h2>One way Data Binding</h2>
          <h3>{a}</h3>
  
        <h2>Two Way Data Binding</h2>
        <input type="text"  onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name" 
        />
  
        <h3>{name}</h3>
      </div>
    );
  }
  
export default C;