 import React, { createContext, useState } from 'react';
  import F from './F'
  export let co=createContext()
  function E()  {
    let [a,seta] = useState(10)
    return (
     <div>
        <co.Provider value={[a,seta]}>
        <F/>    
        </co.Provider>
     </div>
   );
 };

export default E;