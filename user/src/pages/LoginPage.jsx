import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthUser from "../components/AuthUser";

function LoginPage() {
  const { http, setToken, setUser } = AuthUser();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // console.log(email, password);
    http
      .post("/auth/login", { username: username, password: password })
      .then((response) => {
        const token = response.data.access_token;
        const user = response.data.user;
        setToken(token);
        setUser(user);

        if (response.data.user.role === "admin") {
          navigate("/adminDashboard");
        } else if (response.data.user.role === "vendor") {
          navigate("/vendor");
        } else if (response.data.user.role === "user") {
          navigate("/dashboard");
        }
      })
      .catch(function (error) {
        alert(error.response.data.errors);
      });
    e.preventDefault();
  };
  return (
    <>
      <Nav />
      <div className="custom_container">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="exampleInputEmail1"
            placeholder="Username"
          />

          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <button className="login_button" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
