import { Link } from "react-router-dom";
import AuthUser from "./AuthUser";
import { useState, useEffect } from "react";
import axios from "axios";
import AppURL from "../api/AppURL";

function Nav({ product_code }) {
  const { user, token, logout } = AuthUser();
  const [cartCount, setCartCount] = useState(0);

  const handleLogout = () => {
    if (token != undefined) {
      logout();
    }
  };
  useEffect(() => {
    axios.get(AppURL.CartCount(product_code)).then((response) => {
      setCartCount(response.data);
    });
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
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
                <Link class="nav-item nav-link" to="/allProduct">
                  All Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-item nav-link" to="/allProduct">
                  About Us
                </Link>
              </li>
            </ul>

            {user ? (
              <>
                <button class="btn btn-light radius-30 px-4 pe-4 me-2">
                  {/* <i class="bx bx-calendar-event"></i>{" "} */}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "17px",
                    }}
                    to="/dashboard"
                  >
                    {cartCount} Items
                  </Link>
                </button>
                <button class="btn btn-light radius-30 px-4">
                  {/* <i class="bx bx-calendar-event"></i>{" "} */}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "17px",
                    }}
                    to="/dashboard"
                  >
                    dashboard!
                  </Link>
                </button>
                <button
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                  class="btn btn-light radius-30 px-4"
                  onClick={handleLogout}
                >
                  LogOut!
                </button>
              </>
            ) : (
              <>
                <button class="btn btn-dark me-3 radius-30 px-4">
                  {/* <i class="bx bx-lock"></i> */}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "17px",
                    }}
                    to="/login"
                  >
                    login
                  </Link>
                </button>

                <button class="btn btn-light radius-30 px-4">
                  {/* <i class="bx bx-calendar-event"></i> */}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "17px",
                    }}
                    to="/register"
                  >
                    Register!
                  </Link>
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
