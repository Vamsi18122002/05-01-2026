// import React, { useState } from 'react'
// import B from './B'

//  const A = React.memo(() => {
//     let [a,seta] = useState(0)
//     console.log("A component")
//   return (
//     <div>
//         <button onClick={()=>seta(a+1)}>Inc</button>
//         <B/>
//     </div>
//   )
// })
// export default A;
import React, { useState } from 'react';
import B from './B'
function A()  {
    let[a,seta]=useState(0);
     console.log("A Component")
  return (
    <div>
        <h3>{a}</h3>
        <button onClick={()=>seta(a+1)}>Inc</button>
        <B/>
    </div>
  );
};

export default A;