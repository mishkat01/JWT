import Nav from "../components/Nav";
import AuthUser from "../components/AuthUser";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const { getToken } = AuthUser();
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
      <h1>Dashboard</h1>
      <button className="" onClick={handleLogout}>
        bye
      </button>
    </>
  );
}

export default Dashboard;
