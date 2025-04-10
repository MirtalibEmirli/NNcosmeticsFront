import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "@/admin/layout/AdminLayout";
import Dashboard from "@/admin/pages/Dashboard";
import Categories from "@/admin/pages/Categories";
import Brands from "@/admin/pages/Brands";
import Sellers from "@/admin/pages/Sellers";
import Returns from "@/admin/pages/Returns";
import Products from "@/admin/pages/Products";
import ProductsForm from "@/admin/pages/ProductsForm";
import StatisticsPage from "@/admin/pages/StatisticsPage";
import AddSeller from "@/admin/pages/AddSeller";

import SellerDashboard from "../src/sellerSide/pages/SellerDashboard";
import SellerLayout from "./sellerSide/layout/SellerLayout";
import SellerProfile from "@/sellerSide/pages/Profile";
import ContactDeveloper from "@/sellerSide/pages/ContactDeveloper";
import SalesHistory from "./sellerSide/pages/SalesHistory";
import SellPage from "./sellerSide/pages/SellPage";

import Login from "@/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/* Login route */}
      <Route path="/" element={<Login />} />

      {/* Admin protected routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="Admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="categories" element={<Categories />} />
        <Route path="brands" element={<Brands />} />
        <Route path="sellers" element={<Sellers />} />
        <Route path="returns" element={<Returns />} />
        <Route path="products" element={<Products />} />
        <Route path="productsform" element={<ProductsForm />} />
        <Route path="statisticspage" element={<StatisticsPage />} />
        <Route path="addseller" element={<AddSeller />} />
      </Route>

      {/* Seller protected routes */}
      <Route
        path="/seller"
        element={
          <ProtectedRoute role="User">
            <SellerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<SellerDashboard />} />
        <Route path="sell" element={<SellPage />} />
        <Route path="profile" element={<SellerProfile />} />
        <Route path="contact" element={<ContactDeveloper />} />
        <Route path="history" element={<SalesHistory />} />
      </Route>
    </Routes>
  );
};

export default App;
