import AuthUser from "../../components/AuthUser";
import AdminNav from "../../components/admin/AdminNav";

import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";

const AdminDashboard = () => {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div>
        <AdminNav />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <AdminSidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
