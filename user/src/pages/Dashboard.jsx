import Nav from "../components/Nav";

import AuthUser from "../components/AuthUser";
import { Navigate } from "react-router-dom";
import UserSidebar from "../components/user/UserSidebar";
function Dashboard() {
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
      <UserSidebar />
    </>
  );
}

export default Dashboard;
