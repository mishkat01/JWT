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
      <form>
        <div style={{ margin: "100px 500px" }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Phone</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <br />
          <label for="cars">Register As:</label>

          <select id="cars" onChange={(e) => setRole(e.target.value)}>
            <option value="vendor">Vendor</option>
            <option value="user" selected>
              User
            </option>
          </select>
          <br />
          <br />

          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterPage;