// // import React, { useState, useEffect } from "react";
// import store from "./12-03-2026/Store";
// import { increment, decrement } from "./12-03-2026/actions";

// import React, { useState, useEffect } from "react";
// // import store from "./Store";
// // import { increment, decrement } from "./actions";

// const App = () => {
//   const [count, setCount] = useState(store.getState().count);

//   useEffect(() => {
//     const unsubscribe = store.subscribe(() => {
//       setCount(store.getState().count);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <div>
//       <h1>Redux Counter</h1>
//       <h2>{count}</h2>

//       <button onClick={() => store.dispatch(increment())}>
//         Increment
//       </button>

//       <button onClick={() => store.dispatch(decrement())}>
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// // import Index from './25-03-2026/Index'
// // import A from './23-03-2026/A'
// // import B from './25-03-2026/B'
// import { Provider } from "react-redux"; 
// import { store } from "./26-03-2026/Store";
// // import A from './26-03-2026/A'
// import C from './25-03-2026/C'
// import DataBinding from './26-03-2026/DataBinding';
// import B from './26-03-2026/B'
// import A from './28-04-2026/A'
// import Index from './24-04-2026/Index'
// import AA from './27-04-2026(Redux)/AA'
// import Ap from './28-04-2026/Ap'
// import M from './28-04-2026/M'
// import Index from './17-04-2026/Index'
// function App()  {
//   return (
//     <div> 
//       {/* <A/> */}
//       {/* <AA/> */}
//       <Index/>
//     {/* <Provider store={store}>
//     <A/>
//     </Provider> 
//     // {/* <B/> */}
//     {/* <DataBinding/> 
//     <B/> */} 
//      </div>
//   );
// };

// export default App;

// import React from "react";
// import ProductList from "./08-05-2026/ProductList";

// const productsData = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Phone", price: 20000 },
//   { id: 3, name: "Headphones", price: 3000 },
// ];

// function App() {
//   return (
//     <div>
//       <ProductList products={productsData} />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import SearchFilter from "./08-05-2026/SearchFilter";

// function App() {
//   const items = [
//     "Apple",
//     "Banana",
//     "Mango",
//     "Orange",
//     "Grapes",
//     "Pineapple",
//   ];

//   return (
//     <div>
//       <SearchFilter items={items} />
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import App from './App'

// import { Provider } from 'react-redux'
// import { store } from './21-05-2026/store'
// import Counter from "./21-05-2026/A"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <Counter />
//   </Provider>
// )

import React from 'react'
import Counter from './21-05-2026/Redux-Tool/Counter'

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App