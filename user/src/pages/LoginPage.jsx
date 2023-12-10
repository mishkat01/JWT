import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthUser from "../components/AuthUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const notify = () => toast("Wow so easy!");
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
          toast.success("Login successful!");
          navigate("/adminDashboard");
        } else if (response.data.user.role === "vendor") {
          toast.success("Login successful!");
          navigate("/vendor");
        } else if (response.data.user.role === "user") {
          toast.success("Login successful!");
          navigate("/dashboard");
        }
      })
      .catch(function (error) {
        toast.error("Login failed. Please check your username and password.");
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
