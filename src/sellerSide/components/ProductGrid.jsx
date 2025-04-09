import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";

const ProductGrid = ({ products, onSell }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={6} sm={4} md={3} key={product.id}>
          <Paper className="p-4 rounded-xl shadow flex flex-col items-center gap-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <Typography className="text-center font-semibold text-gray-800">
              {product.name}
            </Typography>
            <Typography className="text-sm text-gray-500">
              {product.price} ₼
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => onSell(product)}
            >
              Sat
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
