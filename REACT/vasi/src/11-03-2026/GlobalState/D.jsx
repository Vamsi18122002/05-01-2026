import React, { useContext } from 'react';
import { context } from './A';

function D()  {
    let {a,seta}=useContext(context)
  return (
    <div>
        D
        <h1>{a}</h1>
        <button onClick={()=>seta(a+1)}>click</button>
    </div>
  );
};

export default D;