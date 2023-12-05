import AuthUser from "../../components/AuthUser";
import Nav from "../../components/Nav";
import { Navigate } from "react-router-dom";
function AdminDashboard() {
  const { token, logout, getToken } = AuthUser();
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
      <h1>admin here</h1>;
      <button className="" onClick={handleLogout}>
        bye
      </button>
    </>
  );
}

export default AdminDashboard;
