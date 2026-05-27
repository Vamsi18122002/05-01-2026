 import React, { createContext, useState } from 'react';
  import N from './N';
  export let co=createContext()
 function M()  {
    let [a,seta] = useState(10)
   return (
     <div>
        <co.Provider value={[a,seta]}>
        <N/>    
        </co.Provider>
    
     </div>
   );
 };
 
export default M;