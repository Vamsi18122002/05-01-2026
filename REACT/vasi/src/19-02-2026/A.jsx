import React, { useState } from 'react';
import B from './B'
function A()  {
    let[data,setdata]=useState(0);
     console.log("A Component")
  return (
    <div>
        <h3>Data : {data}</h3>
        <button onClick={()=>setdata(data+1)}>Click</button>
        <B/>
    </div>
  );
};

export default A;