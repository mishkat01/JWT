import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthUser from "../components/AuthUser";
function LoginPage() {
  const { http, setToken } = AuthUser();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = () => {
    // console.log(email, password);
    http
      .post("/auth/login", { username: username, password: password })
      .then((response) => {
        const token = response.data.access_token;
        setToken(token);

        navigate("/dashboard");
      });
  };
  return (
    <>
      <Nav />
      <form>
        <div style={{ margin: "100px 500px" }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
          <br />

          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
