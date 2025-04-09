// sellerSide/components/SearchBar.jsx
import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <TextField
      fullWidth
      size="small"
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder={placeholder || "Axtarış..."}
      className="bg-white rounded-lg shadow"
    />
  );
};

export default SearchBar;
