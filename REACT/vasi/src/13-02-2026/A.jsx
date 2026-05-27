import React, { useEffect, useState } from 'react';

function A() {
    let [a,seta] = useState([])
   
  useEffect(() => {
    console.log("Hello")
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((d) => d.json())
     .then((d) => seta(d)
    //     console.log(d);
        // console.log(typeof (d))
      )
  }, [])

return (
  <div>
    {/* <h2>{a[1]?.title}</h2>
    <h2>{a[1]?.id}</h2>
    <h2>{a[1]?.userId}</h2> */}
    <button onClick={()=>seta(a+1)}>change</button>

    {a.map((b) => {
      return (
        <div key={b.id}>
            {/* {console.log(b.title)} */}
          <h3>{b.title}</h3>
          <h3>{b.id}</h3>
        </div>
      );
    })}
  </div>
);}

export default A;
