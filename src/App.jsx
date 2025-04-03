import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Brands from "./pages/Brands"; // yuxarıya əlavə et
import Sellers from "./pages/Sellers"; // yuxarıya əlavə et
import Returns from './pages/Returns'; // yuxarıya əlavə et
import Products from './pages/Products';
import StatisticsPage from './pages/StatisticsPage';

import ProductsForm from "./pages/ProductsForm.jsx";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsform" element={<ProductsForm/>}/>
        <Route path="/statisticspage" element={<StatisticsPage/>}/>

        {/* Buraya digər səhifələr gələcək: categories, brands və s. */}
      </Route>
    </Routes>
  );
};

export default App;
