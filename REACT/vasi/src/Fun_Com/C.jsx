import React from 'react';

function C(prop)  {
    console.log(prop)
  return (

    <div>This is from Parent {prop.val}</div>
  );
};

export default C;