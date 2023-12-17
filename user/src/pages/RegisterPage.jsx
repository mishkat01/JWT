import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthUser from "../components/AuthUser";
function RegisterPage() {
  const { http, setToken, setUser } = AuthUser();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [role, setRole] = useState();
  const navigate = useNavigate();
  const handleSubmit = () => {
    // console.log(email, password);
    http
      .post("/auth/register", {
        username: username,
        password: password,
        email: email,
        phone: phone,
        role: role,
      })
      .then((response) => {
        navigate("/login");
      });
  };
  return (
    <>
      <Nav />
      <main class="authentication-content">
        <div class="container-fluid">
          <div class="authentication-card">
            <div class="card shadow rounded-0 overflow-hidden">
              <div class="row g-0">
                <div class="col-lg-6 bg-login d-flex align-items-center justify-content-center">
                  <img
                    src="/images/error/login-img.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="col-lg-6">
                  <div class="card-body p-4 p-sm-5">
                    <h5 class="card-title">Sign Up</h5>
                    <p class="card-text mb-5">
                      See your growth and get consulting support!
                    </p>
                    <form class="form-body">
                      <div class="d-grid">
                        <a class="btn btn-white radius-30" href="javascript:;">
                          <span class="d-flex justify-content-center align-items-center">
                            <img
                              class="me-2"
                              src="/images/icons/search.svg"
                              width="16"
                              alt=""
                            />
                            <span>Sign up with Google</span>
                          </span>
                        </a>
                      </div>
                      <div class="login-separater text-center mb-4">
                        <span>OR SIGN UP WITH EMAIL</span>
                        <hr />
                      </div>
                      <div class="row g-3">
                        <div class="col-12 ">
                          <label for="inputName" class="form-label">
                            User Name
                          </label>
                          <div class="ms-auto position-relative">
                            <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                              <i class="bi bi-person-circle"></i>
                            </div>
                            <input
                              class="form-control radius-30 ps-5"
                              id="inputName"
                              onChange={(e) => setUsername(e.target.value)}
                              type="text"
                              placeholder="Enter username"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="inputEmailAddress" class="form-label">
                            Email Address
                          </label>
                          <div class="ms-auto position-relative">
                            <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                              <i class="bi bi-envelope-fill"></i>
                            </div>
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              class="form-control radius-30 ps-5"
                              id="inputEmailAddress"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="inputEmailAddress" class="form-label">
                            Phone
                          </label>
                          <div class="ms-auto position-relative">
                            <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                              <i class="bi bi-envelope-fill"></i>
                            </div>
                            <input
                              onChange={(e) => setPhone(e.target.value)}
                              type="text"
                              class="form-control radius-30 ps-5"
                              id="inputEmailAddress"
                              placeholder="Email Phone"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="inputChoosePassword" class="form-label">
                            Enter Password
                          </label>
                          <div class="ms-auto position-relative">
                            <div class="position-absolute top-50 translate-middle-y search-icon px-3">
                              <i class="bi bi-lock-fill"></i>
                            </div>
                            <input
                              type="password"
                              class="form-control radius-30 ps-5"
                              id="inputChoosePassword"
                              placeholder="Enter Password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="inputChoosePassword" class="form-label">
                            Register As
                          </label>
                          <div class="ms-auto position-relative">
                            <select
                              class="form-select form-select mb-3"
                              aria-label=".form-select-lg example"
                              onChange={(e) => setRole(e.target.value)}
                            >
                              <option value="vendor">Vendor</option>
                              <option value="user" selected>
                                User
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckChecked"
                            >
                              I Agree to the Trems & Conditions
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-grid">
                            <button
                              type="button"
                              class="btn btn-primary radius-30"
                              onClick={handleSubmit}
                            >
                              Sign in
                            </button>
                          </div>
                        </div>
                        <div class="col-12">
                          <p class="mb-0">
                            Already have an account?
                            <a href="authentication-signin.html">
                              Sign up here
                            </a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default RegisterPage;
