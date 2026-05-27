
import Login from "./Login";
import Dashboard from "./Dashboard";
import Loader from "./Loader";

function A() {
  const isLoading = false;
  const isLoggedIn = true;

  // Conditional Rendering
  if (isLoading) {
    return <Loader />;
  } 

  return (
    <div>
     {isLoading ? "Loading Completed":"Still Loading"}
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
}

export default A;