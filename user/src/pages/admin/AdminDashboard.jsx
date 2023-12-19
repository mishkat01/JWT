import AuthUser from "../../components/AuthUser";
import AdminNav from "../../components/admin/AdminNav";

import { Navigate } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";

const AdminDashboard = ({ children }) => {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <AdminNav />

      <div style={{ display: "flex" }}>{children}</div>
    </>
  );
};

export default AdminDashboard;
