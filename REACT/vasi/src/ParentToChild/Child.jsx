import React from 'react';
import { useState } from 'react';

function Child(p)  {
    console.log(p)
    let [c,seta] = useState(200)
  
    function i(c){
      seta(c+1)
      console.log(c)
    }
  return (
    <div>
       <button onClick={()=>{i(c)}}>Increase child  {c}</button>  
       <br></br>
        <h3>Increase Parent {p.v}</h3>
     </div>
  );
};

export default Child;