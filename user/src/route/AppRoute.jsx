import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import RegisterPage from "../pages/RegisterPage";
import VendorPage from "../pages/vendor/VedorPage";
import AllProductPage from "../pages/AllProductPage";
import UserOrder from "../pages/user/UserOrder";

function AppRoute() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allProduct" element={<AllProductPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* vendor route start */}
          <Route path="/vendor" element={<VendorPage />} />

          {/* user route start */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userOrder" element={<UserOrder />} />

          {/* admin route start */}
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoute;
