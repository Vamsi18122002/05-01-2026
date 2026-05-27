import React, { useContext } from 'react';
import {cc}  from './B'
function C()  {
    let [a,seta]=useContext(cc)
  return (
    <div>
        <h3>{a}</h3>
        <button onClick={()=>seta(a+1)}>Click</button>
    </div>
  );
};

export default C;