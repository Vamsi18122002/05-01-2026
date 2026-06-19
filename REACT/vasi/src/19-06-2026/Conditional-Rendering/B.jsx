import Login from "./Login";
import Dashboard from "./Dashboard";
import Loader from "./Loader";

function B() {
  const isLoading = false;
  const isLoggedIn = true;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {isLoading ? "Loading Completed" : "Still Loading"}

      {isLoggedIn && <Dashboard />}

      {!isLoggedIn && <Login />}
    </div>
  );
}

export default B;