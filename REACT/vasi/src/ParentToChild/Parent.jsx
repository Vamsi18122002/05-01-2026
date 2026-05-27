import React, {useState} from 'react';
import Child from './Child'
function Parent()  {
    let a = 345
    let [A,B] = useState(500)
    function increase(A){
        B(A+1)
        console.log(A)
    }
  return (
    <div>
        <Child v={A}/>
        <button onClick={()=>{increase(A)}}>Increase Parent</button>
        
    </div>
  );
};

export default Parent;