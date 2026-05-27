import React, { useContext } from 'react';
import { co } from './A';


function I()  {
   let [a,seta] = useContext(co);
  return (
    <div>
        <h3> D - This value is from A {a}</h3>
        <button onClick={()=>{seta(a+1)}}> Click </button>
    </div>
  );
};

export default I;