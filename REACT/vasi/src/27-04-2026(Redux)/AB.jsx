import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
function AB()  {
    let data = useSelector((state)=>{
        return state.sum
    })
    // console.log(data)
    let k = useDispatch()
  return (
    
    <div>
        <h3>data:{data}</h3>
      <button onClick={() => {k({type:"a"})}}>
        Inc
     </button>
      A
      <button onClick={() => {k({type:"b"})}}>
        Dec
     </button>
        
    </div>
  );
};

export default AB;