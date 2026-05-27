import React from 'react';
import E from './E';
import F from './F'
function C({value})  {
  return (
    <div>
        <h4>C</h4>
        <E value={value}/>
        <F value={value}/>
    </div>
  );
};

export default C;