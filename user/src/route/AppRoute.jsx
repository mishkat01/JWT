import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

import AdminDashboard from "../pages/admin/AdminDashboard";
import RegisterPage from "../pages/RegisterPage";
import VendorDashboard from "../pages/vendor/VedorDashboard";
import AllProductPage from "../pages/AllProductPage";
import UserOrder from "../pages/user/UserOrder";
import ProductAdd from "../pages/admin/product/ProductAdd";
import ProductAll from "../pages/admin/product/ProductAll";
import VendorAll from "../pages/admin/vendor/VendorAll";
import User from "../pages/user/User";
import DashboardLayout from "../pages/DashboardLayout";
import AdminHome from "../pages/admin/AdminHome";
import VendorHome from "../pages/vendor/VendorHome";
import VendorProductAdd from "../pages/vendor/product/VendorProductAdd";
import VendorProductAll from "../pages/vendor/product/VendorProductAll";

function AppRoute() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allProduct" element={<AllProductPage />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* vendor route start */}
          <Route path="/vendor" element={<VendorDashboard />}>
            <Route index element={<VendorHome />}></Route>
            <Route path="productAdd" element={<VendorProductAdd />}></Route>
            <Route path="productAll" element={<VendorProductAll />}></Route>
          </Route>

          {/* user route start */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<User />}></Route>
            <Route path="userOrder" element={<UserOrder />}></Route>
          </Route>

          {/* admin route start */}
          <Route path="/adminDashboard" element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="productAdd" element={<ProductAdd />} />
            <Route path="productAll" element={<ProductAll />} />
            <Route path="vendorAll" element={<VendorAll />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default AppRoute;
