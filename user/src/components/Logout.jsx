import AuthUser from "./AuthUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Logout() {
  const { logout, token } = AuthUser();

  const handleLogout = () => {
    if (token != undefined) {
      toast.success("Logout successful!");
      logout();
    }
  };
  return (
    <>
      <button className="logout_button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}

export default Logout;
