import React from 'react';
import C from './C';

const B = React.memo(() => {
  console.log("B Component");
  return (
    <div>
      <C />
    </div>
  );
});

export default B;