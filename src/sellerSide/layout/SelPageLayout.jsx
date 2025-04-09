import React, { useState } from "react";
import { Box, Typography, TextField, IconButton, Grid, Card, CardMedia, CardContent, Button, InputAdornment } from "@mui/material";
import { ArrowBack, Search, ShoppingCart } from "@mui/icons-material";

const parentCategories = [
  { id: 1, name: "Pomada", image: "https://example.com/pomada.jpg" },
  { id: 2, name: "Tonal", image: "https://example.com/tonal.jpg" },
  { id: 3, name: "Liner", image: "https://example.com/liner.jpg" },
];

const topProducts = [
  { id: 1, name: "KIKO Pomada", image: "https://example.com/kiko.jpg" },
  { id: 2, name: "Maybelline Lip Gel", image: "https://example.com/maybelline.jpg" },
  { id: 3, name: "Golden Rose Liner", image: "https://example.com/goldenrose.jpg" },
];

const SellPage = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchBarcode, setSearchBarcode] = useState("");

  return (
    <Box className="font-[Poppins] p-5 space-y-6">
      {/* Header */}
      <Box className="flex items-center justify-between">
        <Box className="flex items-center gap-3">
          <IconButton>
            <ArrowBack className="text-purple-700" />
          </IconButton>
          <Typography variant="h6" className="text-purple-700 font-bold">
            Satış Paneli
          </Typography>
        </Box>

        <IconButton>
          <ShoppingCart className="text-purple-700" />
        </IconButton>
      </Box>

      {/* Search bars */}
      <Box className="flex gap-4 flex-wrap">
        <TextField
          fullWidth
          variant="outlined"
          label="Kateqoriya üzrə axtarış"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Barkodu daxil edin"
          value={searchBarcode}
          onChange={(e) => setSearchBarcode(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Parent Categories */}
      <Typography variant="h6" className="text-purple-600 font-semibold mt-5">
        Məhsul Kateqoriyaları
      </Typography>
      <Grid container spacing={3}>
        {parentCategories
          .filter((cat) =>
            cat.name.toLowerCase().includes(searchCategory.toLowerCase())
          )
          .map((cat) => (
            <Grid item xs={12} sm={6} md={4} key={cat.id}>
              <Card className="hover:shadow-lg cursor-pointer transition">
                <CardMedia
                  component="img"
                  height="160"
                  image={cat.image}
                  alt={cat.name}
                />
                <CardContent>
                  <Typography className="text-center font-semibold text-gray-700">
                    {cat.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      {/* Top Selling Products */}
      <Box className="mt-10">
        <Typography variant="h6" className="text-purple-600 font-semibold mb-3">
          Ən Çox Satılan Məhsullar
        </Typography>
        <Grid container spacing={2}>
          {topProducts.map((prod) => (
            <Grid item xs={6} md={3} key={prod.id}>
              <Card className="flex items-center gap-3 p-3 bg-pink-50">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-14 h-14 object-cover rounded-md"
                />
                <Box className="flex flex-col">
                  <Typography className="font-semibold text-sm">
                    {prod.name}
                  </Typography>
                  <Button size="small" variant="contained" color="secondary">
                    Səbətə əlavə et
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SellPage;
