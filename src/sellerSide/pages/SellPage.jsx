import React, { useState,useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Component imports
import SearchBar from "../components/SearchBar";
import ParentCategoryCard from "../components/ParentCategoryCard";
import PopularProductCard from "../components/PopularProductCard";
import BasketDrawer from "../components/BasketDrawer";
import axios from "axios";

// Mock Data
const mockParentCategories = [
  { id: 1, name: "Pomada", image: "https://akn-kikomilano.a-cdn.akinoncloud.com/products/2024/08/05/5468/03a18ca4-bc16-49d3-9db0-cae69e42ef3c_size500x500_cropCenter.jpg" },
 ]

const topProducts = [
  { id: 1, name: "Kiko Pomada qirmizi qalin", image: "https://akn-kikomilano.a-cdn.akinoncloud.com/products/2024/08/05/5468/03a18ca4-bc16-49d3-9db0-cae69e42ef3c_size500x500_cropCenter.jpg" },
  { id: 2, name: "Emily dodaq korandasi brown", image: "https://akn-kikomilano.a-cdn.akinoncloud.com/products/2024/08/05/5468/03a18ca4-bc16-49d3-9db0-cae69e42ef3c_size500x500_cropCenter.jpg" },
 { id: 4, name: "Məhsul 4", image: "https://akn-kikomilano.a-cdn.akinoncloud.com/products/2024/08/05/5468/03a18ca4-bc16-49d3-9db0-cae69e42ef3c_size500x500_cropCenter.jpg" },
  { id: 44, name: "Məhsul 4", image: "https://akn-kikomilano.a-cdn.akinoncloud.com/products/2024/08/05/5468/03a18ca4-bc16-49d3-9db0-cae69e42ef3c_size500x500_cropCenter.jpg" },
  { id: 45, name: "Məhsul 4", image: "https://akn-kikomilano.a-cdn.akinoncloud.com/products/2024/08/05/5468/03a18ca4-bc16-49d3-9db0-cae69e42ef3c_size500x500_cropCenter.jpg" },
  { id: 46, name: "Məhsul 4", image: "https://akn-kikomilano.a-cdn.akinoncloud.com/products/2024/08/05/5468/03a18ca4-bc16-49d3-9db0-cae69e42ef3c_size500x500_cropCenter.jpg" },

];

const  SellPage =  () => {
const [basketItems, setBasketItems] = useState([]); 
useEffect(() => { 
  const fetchData = async () => {
    const brands = await axios.get("http://104.248.36.17:7013/api/brands");
    console.log(brands.data);
    console.log(1111111);
  };

  fetchData();
}, []);

  const [selectedParent, setSelectedParent] = useState(null);
  const [openBasket, setOpenBasket] = useState(false);

  return (
    <Box className="font-[Poppins]p-6 min-h-screen bg-[#f8f7fc] space-y-6">
      
      {/* 🧭 Top Bar */}

      <Box className="flex justify-between items-center">
        <Box className="flex items-center gap-4">
          {selectedParent && (
            <IconButton
              color="secondary"
              onClick={() => setSelectedParent(null)}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" className="text-purple-700 font-bold">
            Satış Paneli
          </Typography>
        </Box>

        <IconButton onClick={() => setOpenBasket(true)} color="primary">
          <ShoppingCartIcon />
        </IconButton>
      </Box>

      {/* 🔍 Search Bars */}
      <SearchBar
        placeholder={
          selectedParent ? "Məhsul axtar..." : "Kateqoriya axtar..."
        }
      />
      <SearchBar placeholder="Barkodu daxil et..." isBarcode  />
       
      
      <Grid container spacing={4}  className="w-full ">
        {/* 🎯 Left Panel - Parent Categories */}

        <Grid item xs={12} md={8} className="w-3/4">
          <Grid container spacing={3}>
            {mockParentCategories.map((cat) => (
              <Grid item xs={6} md={4} key={cat.id}>
                <ParentCategoryCard
                  name={cat.name}
                  image={cat.image}
                  onClick={() => setSelectedParent(cat)}
                  large
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* ⭐ Right Panel - Popular Products */}
        <Grid item xs={12} md={1} className="w-[250px]"> 
          <Typography
            variant="subtitle1"
            className="font-semibold text-gray-700 mb-3"
          >
            Ən Çox Satılanlar
          </Typography>
          <Paper className="p-4 shadow space-y-3">
            {topProducts.map((prod) => (
              <PopularProductCard
                key={prod.id}
                name={prod.name}
                image={prod.image}
                onAddToCart={() => console.log(`${prod.name} əlavə olundu`)}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>

      {/* 🧺 Basket Drawer */}
     <BasketDrawer
  open={openBasket}
  onClose={() => setOpenBasket(false)}
  basketItems={basketItems}
  onConfirm={() => console.log("Satış təsdiqləndi")}
/>

    </Box>
  );
};

export default SellPage;
