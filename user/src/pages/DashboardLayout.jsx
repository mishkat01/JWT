import Nav from "../components/Nav";

import AuthUser from "../components/AuthUser";
import { Navigate, Outlet } from "react-router-dom";
import UserSidebar from "../components/user/UserSidebar";
function DashboardLayout() {
  const { token, logout, getToken, user, http } = AuthUser();
  // http.get("auth/me").then((res) => {
  //   console.log(res.data);
  // });

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
      <div style={{ display: "flex" }}>
        <div>
          <UserSidebar />
        </div>
        <div style={{ flex: 1, width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
