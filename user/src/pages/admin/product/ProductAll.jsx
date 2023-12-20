import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminNav from "../../../components/admin/AdminNav";
import AuthUser from "../../../components/AuthUser";
import { Navigate } from "react-router-dom";
function ProductAll() {
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
        <div style={{ display: "inline-block" }}>
          <h1>All</h1>
        </div>
      </div>
    </>
  );
}

export default ProductAll;
