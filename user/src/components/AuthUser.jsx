import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

export default function AuthUser() {
  const getToken = () => {
    const token = localStorage.getItem("token"); // Use "token" as the key here
    return token;
  };

  const navigate = useNavigate();
  const [token, setToken] = useState(getToken());

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const saveToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));

    setToken(token);

    navigate("/dashboard");
  };
  const http = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    http,
    setToken: saveToken,
    logout,
    getToken,
    token,
  };
}
