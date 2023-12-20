import AuthUser from "../../components/AuthUser";
import Nav from "../../components/Nav";
import { Navigate } from "react-router-dom";
function VendorDashboard() {
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
      <h1>Vendor here</h1>;
      <button className="" onClick={handleLogout}>
        bye
      </button>
    </>
  );
}

export default VendorDashboard;
