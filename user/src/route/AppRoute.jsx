import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import RegisterPage from "../pages/RegisterPage";
import VendorPage from "../pages/vendor/VedorPage";
import AdminHome from "../pages/admin/AdminHome";
function AppRoute() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* vendor route start */}
          <Route path="/vendor" element={<VendorPage />} />

          {/* user route start */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* admin route start */}
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/adminHome" element={<AdminHome />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoute;
