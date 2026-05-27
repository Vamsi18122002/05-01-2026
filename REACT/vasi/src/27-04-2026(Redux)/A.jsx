import React, { createContext, useState } from 'react';
import B from './B'
import C from './C'
export let cc=createContext()
function A()  {
  let [a,seta]=useState(0)
 
  return (
    <div>
      <cc.Provider value={[a,seta]}>
<B/>
<C/>
      </cc.Provider>
    </div>
  );
};

export default A;