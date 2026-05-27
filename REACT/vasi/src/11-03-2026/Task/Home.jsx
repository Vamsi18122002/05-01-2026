import React from "react";
function Home({ setPage, setRole }) {
  return (
    <div>
      <h1>Are you a?</h1>

      <button onClick={() => { setRole("HR"); setPage("login"); }}>
        HR
      </button>

      <button onClick={() => { setRole("Employee"); setPage("login"); }}>
        Employee
      </button>

      <button onClick={() => { setRole("Manager"); setPage("login"); }}>
        Manager
      </button>

      <button onClick={() => { setRole("Admin"); setPage("login"); }}>
        Admin
      </button>
    </div>
  );
}

export default Home;


