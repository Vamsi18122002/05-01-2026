import React from 'react';
import I from './I';
function H({value})  {
  return (
    <div>
        <h4>H</h4>
        <I value={value}/>
    </div>
  );
};

export default H;