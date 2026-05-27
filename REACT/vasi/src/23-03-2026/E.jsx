import React, { useContext } from 'react';
import { co } from './A';

function E()  {
    let [a,seta] = useContext(co)
  return (
    <div>
       <h3> E - This value is from A {a}</h3>
        <button onClick={()=>{seta(a+1)}}> Click </button>
    </div>
  );
};

export default E;