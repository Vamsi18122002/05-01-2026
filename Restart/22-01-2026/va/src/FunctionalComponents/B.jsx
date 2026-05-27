import React from 'react';
import E from '../27-01-2026/E'
function B(i)  {
  let k=12345
  i.v(k)
  return (
    <div>
        <h1>This is B Component</h1>
        <h3>{k}</h3>
        <E c={k}/>
    </div>
  )
}

export default B; 