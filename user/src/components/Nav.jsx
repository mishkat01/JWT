import { Link } from "react-router-dom";
import AuthUser from "./AuthUser";
import { Navigate } from "react-router-dom";
function Nav() {
  const { getToken } = AuthUser;
  // if (!getToken) {
  //   return <Navigate to="/login" />;
  // }
  console.log(getToken);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to="/">
              Home
            </Link>
            <Link class="nav-item nav-link" to="/login">
              login
            </Link>
            <Link class="nav-item nav-link" to="/dashboard">
              dashboard
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
