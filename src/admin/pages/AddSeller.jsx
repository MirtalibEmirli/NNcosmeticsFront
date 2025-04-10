import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import axios from "axios";

const AddSeller = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://104.248.36.17:7013/api/Login/Register", formData);
      alert("Satıcı uğurla əlavə olundu!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", password: "" });
    } catch (err) {
      console.error(err);
      alert("Xəta baş verdi.");
    }
  };

  return (
    <Paper className="p-6 max-w-md mx-auto mt-10 shadow-md">
      <Typography variant="h5" className="text-purple-800 font-bold mb-4">
        Satıcı əlavə et
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Ad"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Soyad"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          fullWidth
          required
        />
        <TextField
          label="Telefon"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Şifrə"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          fullWidth
          required
        />
        <Button variant="contained" color="secondary" type="submit" fullWidth>
          Əlavə et
        </Button>
      </form>
    </Paper>
  );
};

export default AddSeller;
