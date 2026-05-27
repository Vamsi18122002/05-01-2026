import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
function BB()  {
    let m = useDispatch()
    let n = useSelector((state)=>{
        return state.sum
    })
  return (
    <div>
        <h3>Data : {n}</h3>
        <button onClick={()=>{m({type:"a"})}}>Increase</button>
        <button onClick={()=>{m({type:"b"})}}>Decrease</button>
    </div>
  );
};

export default BB;