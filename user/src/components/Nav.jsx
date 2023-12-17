import { Link } from "react-router-dom";
import AuthUser from "./AuthUser";

function Nav() {
  const { user } = AuthUser();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary rounded">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent5"
            aria-controls="navbarSupportedContent5"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent5">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {" "}
                <Link class="nav-item nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="#">
                  <i class="bx bx-user me-1"></i>About
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="#">
                  <i class="bx bx-category-alt me-1"></i>Features
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="#">
                  <i class="bx bx-microphone me-1"></i>Contact
                </a>
              </li>
              <li class="nav-item dropdown">
                {" "}
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {user ? (
              <>
                <button class="btn btn-light radius-30 px-4" type="submit">
                  <i class="bx bx-calendar-event"></i>{" "}
                  <Link to="/dashboard">dashboard!</Link>
                </button>
              </>
            ) : (
              <>
                <button class="btn btn-dark me-3 radius-30 px-4">
                  <i class="bx bx-lock"></i>
                  <Link to="/login">login</Link>
                </button>

                <button class="btn btn-light radius-30 px-4" type="submit">
                  <i class="bx bx-calendar-event"></i>{" "}
                  <Link to="/register">Register!</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
