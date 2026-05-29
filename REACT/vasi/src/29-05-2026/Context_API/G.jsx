import React, { useContext } from 'react';
import { co } from './E';


function G()  {
   let [a,seta] = useContext(co);
  return (
    <div>
        <h3> G - This value is from E {a}</h3>
        <button onClick={()=>{seta(a+1)}}> Click </button>
    </div>
  );
};

export default G;