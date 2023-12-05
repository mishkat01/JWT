import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import RegisterPage from "../pages/RegisterPage";
import VendorPage from "../pages/vendor/VedorPage";
function AppRoute() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/vendor" element={<VendorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoute;
