import React from 'react';

function Event_Handling()  {
  let handlesubmit = (e) => {
    e.preventDefault();
  };

  let handlechange = () => {
    console.log("handle change called");
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handlesubmit} onChange={handlechange}>
        <input type="text" />
        <button type="submit">login</button>
      </form>

    </div>
  );
}

export default Event_Handling;