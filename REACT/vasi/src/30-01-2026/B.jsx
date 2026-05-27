import React from 'react';
import D from './D'
function B({value})  {
    console.log(value)
  return (
    <div>
        <h4>B</h4>
        <D value={value}/>
    </div>
  );
};

export default B;