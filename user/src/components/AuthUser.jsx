import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

export default function AuthUser() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const token = JSON.parse(tokenString); // Use "token" as the key here
    return token;
  };
  const getUser = () => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    return user;
  };

  const navigate = useNavigate();
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const saveToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));

    setToken(token);

    navigate("/dashboard");
  };

  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const http = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return {
    user,
    http,
    setToken: saveToken,
    logout,
    getToken,
    setUser: saveUser,
    token,
    getUser,
  };
}
