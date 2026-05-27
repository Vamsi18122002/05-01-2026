import React, { useContext } from 'react';
import { co } from './M';


function P()  {
   let [a,seta] = useContext(co);
  return (
    <div>
        <h3> P - This value is from M {a}</h3>
        <button onClick={()=>{seta(a+1)}}> Click </button>
    </div>
  );
};

export default P;