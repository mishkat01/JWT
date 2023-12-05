import AuthUser from "../../components/AuthUser";
function VendorPage() {
  const { token, logout } = AuthUser();
  const handleLogout = () => {
    if (token != undefined) {
      logout();
    }
  };
  return (
    <>
      <h1>Vendor here</h1>;
      <button className="" onClick={handleLogout}>
        bye
      </button>
    </>
  );
}

export default VendorPage;
