import { Link } from "react-router-dom";
import AuthUser from "./AuthUser";

function Nav() {
  const { user } = AuthUser();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to="/">
              Home
            </Link>
            {user ? (
              <Link class="nav-item nav-link" to="/dashboard">
                dashboard!
              </Link>
            ) : (
              <>
                <Link class="nav-item nav-link" to="/login">
                  login
                </Link>
                <Link class="nav-item nav-link" to="/register">
                  Register!
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
