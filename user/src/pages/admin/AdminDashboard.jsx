import AuthUser from "../../components/AuthUser";

function AdminDashboard() {
  const { token, logout } = AuthUser();
  const handleLogout = () => {
    if (token != undefined) {
      logout();
    }
  };
  return (
    <>
      <h1>admin here</h1>;
      <button className="" onClick={handleLogout}>
        bye
      </button>
    </>
  );
}

export default AdminDashboard;
