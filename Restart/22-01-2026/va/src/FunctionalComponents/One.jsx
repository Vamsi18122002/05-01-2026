import React from 'react';

function One()  {
    var m = 23522
    var n = [3435,"ferari"]
    var o = {name:"kashi",age:30}
  return (
    <div>
        <h3>This is One Component</h3>
        <h4>{m}</h4>
        <h3>{n[1]}</h3>
        <h2>{o.name}</h2>
    </div>
  );
};

export default One;