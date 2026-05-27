import React, { useState } from 'react';
import D from './D'
import E from './E'
function B()  {
    let [b,setb] = useState(100)
  return (
    <div>
        B
        <D/>
        <E b={b}/>
    </div>
  );
};

export default B;