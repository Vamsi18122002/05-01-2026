 import React, { createContext, useState } from 'react';
 import B from './B';
 import C from './C';
  export let co=createContext()
 function A()  {
    let [a,seta] = useState(10)
   return (
     <div>
        <co.Provider value={[a,seta]}>
        <B/>
        <C/>    
        </co.Provider>
    
     </div>
   );
 };
 
 export default A;