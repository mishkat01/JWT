import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminNav from "../../../components/admin/AdminNav";
import AuthUser from "../../../components/AuthUser";
import { Navigate } from "react-router-dom";

function ProductAdd() {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>p add</h1>
    </>
  );
}

export default ProductAdd;
