 import React, {createContext, useState} from 'react';
  import D from './D'
  export let co=createContext()
  function C()  {
    let [a,seta] = useState(10)
    return (
     <div>
         <co.Provider value={[a,seta]}>
         <D/>    
         </co.Provider>
     </div>
   );
 };
export default C;