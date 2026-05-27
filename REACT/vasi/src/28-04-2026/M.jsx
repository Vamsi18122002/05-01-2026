import React, { useState } from 'react';
import N from './N'
function M()  {
    let[a,seta]=useState(0);
     console.log("M Component")
  return ( 
    <div>
        <h3>{a}</h3>
        <button onClick={()=>seta(a+1)}>Inc</button>
        <N/>
    </div>
  );
};

export default M;