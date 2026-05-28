import React from "react";
import C from './C'
const Child = React.memo(() => {
  console.log("Child is Rendered");
  return <div>
<h1>Child Component</h1>;
<C/>
</div>
}); 

export default Child;
