import Nav from "../components/Nav";
import { useEffect } from "react";
import AuthUser from "../components/AuthUser";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const { user, http } = AuthUser();
  const { token, logout, getToken } = AuthUser();
  http.get("auth/me").then((res) => {
    console.log(res.data);
  });
  useEffect(() => {
    const checkToken = () => {
      const currentToken = getToken();
      if (currentToken !== token) {
        setToken(currentToken);
        if (!currentToken) {
          return <Navigate to="/login" />;
        }
      }
    };

    window.addEventListener("storage", checkToken);

    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, [token, getToken]);
  const handleLogout = () => {
    if (token != undefined) {
      logout();
    }
  };
  console.log(token);

  return (
    <>
      <Nav />
      <h2>hello {user.username}</h2>
      <h2> {user.email}</h2>
      <h2> {user.phone}</h2>
      <br />
      <button className="" onClick={handleLogout}>
        bye
      </button>
    </>
  );
}

export default Dashboard;
