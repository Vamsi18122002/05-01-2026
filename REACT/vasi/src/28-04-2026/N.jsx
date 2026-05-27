import React from 'react';
import O from './O';

const N = React.memo(() => {
  console.log("N Component");
  return (
    <div>
      <O />
    </div>
  );
});

export default N;