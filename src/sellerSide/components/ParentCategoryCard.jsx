// sellerSide/components/ParentCategoryCard.jsx
import React from "react";
import { Paper, Typography } from "@mui/material";

const ParentCategoryCard = ({ image, name, onClick }) => {
  return (
    <Paper
      onClick={onClick}
      className="cursor-pointer hover:shadow-lg transition p-2  flex flex-col items-center justify-center text-center"
    >
      <img
        src={image}
        alt={name}
        className="w-44 h-44 object-cover rounded-full mb-2"
      />
      <Typography variant="subtitle1" className="font-semibold text-gray-800">
        {name}
      </Typography>
    </Paper>
  );
};

export default ParentCategoryCard;
