import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";
import Logout from "../Logout";

function Nav() {
  const { user } = AuthUser();

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Hello {user.username}
        </a>

        <div class="collapse navbar-collapse text-right" id="navbarNav">
          <ul class="navbar-nav">
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
