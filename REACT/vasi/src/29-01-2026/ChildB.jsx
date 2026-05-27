import React from "react";
function ChildB(pro) {
  console.log(pro.m);
  return (
    <div>
      <h3>{pro.m}</h3>
    </div>
  );
}

export default ChildB;
