import React, { useState } from 'react';

function B()  {
 let [A,seta] = useState({
    name:"vasi",
    class:9
 })
  let set =()=>{
        seta({
            ...A,
            class:10
        })
    }
    
  return (
   
    <div>
        <h3>Name:{A.name}</h3>
        <h3>Class:{A.class}</h3>
        <button onClick={set}> Click</button>
      
    </div>
  );
};

export default B;