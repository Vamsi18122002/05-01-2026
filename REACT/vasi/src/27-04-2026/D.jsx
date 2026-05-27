import React from 'react';
import {cc} from './B'
import { useContext } from 'react';
function D()  {
    let [a,seta]=useContext(cc)
  return (
    <div>
        <h1>{a}</h1>
        <button onClick={()=>{seta(a+1)}}>Click</button>
    </div>
  );
};

export default D;