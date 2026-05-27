import React, { createContext, useState } from 'react';
import D from './D';
// import C from './C'
export let cc = createContext()
function B()  {
    let [a,seta] = useState(10);
  return (
    <div>
        <cc.Provider value={[a,seta]}>
    <C/>
    <D/>
        </cc.Provider>
    </div>
  );
};

export default B;