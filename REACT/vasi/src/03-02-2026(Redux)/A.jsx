import React, { useReducer } from 'react';
let data={
    count:0
}
 let countReducer =(state,actions)=>{
            switch (actions.type) {
                case "inc":
                    return {
                        count:state.count+1
                    }
                    break;
                case "dec":
                    return {
                        count:state.count-1
                    }
                    break;
                default:
                    return state      
            }
     }
function A()  {
    let [a,seta] = useReducer(countReducer,data)
     console.log(a)
  return (
    <div>
        <button onClick={()=>seta({type:"inc"})}>Inc</button>
        <button onClick={()=>seta({type:"dec"})}>Dec</button>
    </div>
  );
};

export default A;