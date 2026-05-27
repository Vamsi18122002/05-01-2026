import React, { Fragment, Profiler, StrictMode, Suspense } from 'react';
import A from './FunctionalComponents/A';
import B from './FunctionalComponents/B';
import D from './27-01-2026/D';
function App()  {
  let a = 2523
  function hello(f){
    console.log(f)
  }
  hello(12)
  return (
     // <div>
     // // <StrictMode>
     // <Fragment>
      // <>
      // <Suspense>
       <Profiler>
      <A value={a}/>
      <B v={hello}/>
      <D/>
       </Profiler>
      // </Suspense>
      // </>
    // {/* </Fragment> */}
    // </StrictMode>
    // </div>
  );
};

export default App;