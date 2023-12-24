import AuthUser from "../../components/AuthUser";
import VendorNav from "../../components/vendor/VendorNav";
import VendorSidebar from "../../components/vendor/VendorSidebar";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
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
      {" "}
      <VendorNav />
      <div style={{ display: "flex" }}>
        <div>
          <VendorSidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default VendorDashboard;
