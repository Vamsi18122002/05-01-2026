 import React, { createContext, useState } from 'react';
  import B from './B';

  export let co=createContext()
 function A()  {
    let [a,seta] = useState(100)
   return (
     <div>
        <co.Provider value={[a,seta]}>
        <B/>    
        </co.Provider>
    
     </div>
   );
 };
 
 export default A;