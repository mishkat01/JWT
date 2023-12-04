import Nav from "../components/Nav";
import AuthUser from "../components/AuthUser";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const { getToken } = AuthUser();
  const { user } = AuthUser();
  const { token, logout } = AuthUser();
  if (!getToken()) {
    return <Navigate to="/login" />;
  }
  const handleLogout = () => {
    if (token != undefined) {
      logout();
    }
  };

  return (
    <>
      <Nav />
      <h2>hello {user.username}</h2>
      <h2> {user.email}</h2>
      <h2> {user.phone}</h2>
      <br />
      <button className="" onClick={handleLogout}>
        bye
      </button>
    </>
  );
}

export default Dashboard;
