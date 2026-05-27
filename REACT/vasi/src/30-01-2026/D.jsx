import React from 'react';
import G from './G';
import H from './H';
function D({value})  {
  return (
    <div>
        <h4>D It is from A {value}</h4>

        <G value={value}/>
        <H value={value}/>
    </div>
  );
};

export default D;