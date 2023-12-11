import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";
import Logout from "../Logout";

function Nav() {
  const { user } = AuthUser();

  return (
    <>
      <nav class="navbar">
        <div style={{ paddingLeft: "5vh" }} class="username">
          Welcome, {user.username}
        </div>
        <div style={{ paddingRight: "5vh" }}>
          <Logout />
        </div>
      </nav>
    </>
  );
}

export default Nav;
