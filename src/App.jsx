import React from "react";
import { Routes, Route } from "react-router-dom";

// 🟣 Admin Layout
import AdminLayout from "@/admin/layout/AdminLayout";

// 🟣 Admin Pages
import Dashboard from "@/admin/pages/Dashboard";
import Categories from "@/admin/pages/Categories";
import Brands from "@/admin/pages/Brands";
import Sellers from "@/admin/pages/Sellers";
import Returns from "@/admin/pages/Returns";
import Products from "@/admin/pages/Products";
import ProductsForm from "@/admin/pages/ProductsForm";
import StatisticsPage from "@/admin/pages/StatisticsPage";
// // Seller pages
import SellerDashboard from "../src/sellerSide/pages/SellerDashboard";
import SellerLayout from "./sellerSide/layout/SellerLayout";
import SellerProfile from "@/sellerSide/pages/Profile";
import ContactDeveloper from "@/sellerSide/pages/ContactDeveloper";

// 🌐 General Pages
import Login from "@/pages/Login";
import SalesHistory from "./sellerSide/pages/SalesHistory";
import SellPage from "./sellerSide/pages/SellPage";

const App = () => {
  return (
    <Routes>
      {/* 🌐 İlk görünən səhifə -> Login */}
      <Route path="/" element={<Login />} />

      {/* 🟣 Admin Panel Routing */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="categories" element={<Categories />} />
        <Route path="brands" element={<Brands />} />
        <Route path="sellers" element={<Sellers />} />
        <Route path="returns" element={<Returns />} />
        <Route path="products" element={<Products />} />
        <Route path="productsform" element={<ProductsForm />} />
        <Route path="statisticspage" element={<StatisticsPage />} />
      </Route>

      <Route path="/seller" element={<SellerLayout />}>
        <Route path="dashboard" element={<SellerDashboard />} />
        <Route path="sell" element={<SellPage/>} />
        <Route path="profile" element={<SellerProfile />} />
        <Route path="contact" element={<ContactDeveloper />} />
        <Route path="history" element={<SalesHistory />} />

        {/* <Route path="sell" element={<SellPage />} />
    <Route path="history" element={<OrderHistory />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
