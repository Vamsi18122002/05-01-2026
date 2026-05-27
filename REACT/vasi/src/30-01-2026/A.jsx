import React, { useState } from 'react';
import B from './B';
import C from './C';

function A()  {
    let [a,seta]=useState(1000)
  return (
    <div>
        <h4>A</h4>
        <B value={a}/>
        <C value={a}/>
    </div>
  );
};
export default A;

 