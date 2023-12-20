import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminNav from "../../../components/admin/AdminNav";

function ProductAdd() {
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
          <h1>hi</h1>
        </div>
      </div>
    </>
  );
}

export default ProductAdd;
