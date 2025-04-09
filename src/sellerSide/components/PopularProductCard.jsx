// sellerSide/components/PopularProductCard.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";

const PopularProductCard = ({ image, name, onAdd }) => {
  return (
    <button className="flex items-center gap-3 p-1 border rounded-xl bg-white shadow-sm">
      <img
        src={image}
        alt={name}
        className="w-20 border border-black h-20 rounded-lg object-cover"
      />
      <Box className="flex-1 p-[2px]">
        <p className="text-sm   border w-28 border-red-900">{name}</p>
        {/* <p>Say</p> */}
      </Box>
    </button>
  );
};

export default PopularProductCard;
