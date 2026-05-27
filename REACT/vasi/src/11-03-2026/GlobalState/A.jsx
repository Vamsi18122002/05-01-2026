import React, { createContext, useState } from 'react';
import B from './B'
import C from './C'
export let context = createContext()
function A()  {
    let [a,seta]=useState(0)
  return (
    <div>
        <context.Provider value={{a,seta}}>
            A
            <B/>
            <C/>
        </context.Provider>
    </div> 
  );
};

export default A;