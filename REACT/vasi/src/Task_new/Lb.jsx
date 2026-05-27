import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Lb()  {
    let y = useDispatch()
    let z = useSelector((state)=>{
        return state.sum
    })
  return (
    <div>
      <h4>{z}</h4>
        <button onClick={()=>{y({type:"a"})}}>Increase</button>
        <button onClick={()=>{y({type:"b"})}}>Decrease</button>
    </div>
  );
};

export default Lb;