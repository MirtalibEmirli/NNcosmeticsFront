// 📁 src/sellerSide/components/BasketDrawer.jsx
import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BasketDrawer = ({ open, onClose, basketItems = [], onConfirm }) => {
  const [paymentType, setPaymentType] = useState("cash");

  const total = basketItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box className="w-[320px] sm:w-[400px] p-5 space-y-4 font-[Poppins]">
        {/* Header */}
        <Box className="flex justify-between items-center">
          <Typography variant="h6" className="text-purple-800 font-bold">
            Səbət
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Məhsul Siyahısı */}
        {basketItems.length === 0 ? (
          <Typography className="text-gray-500">Səbət boşdur</Typography>
        ) : (
          <Box className="space-y-3">
            {basketItems.map((item, index) => (
              <Box key={index} className="flex justify-between text-sm">
                <Typography>{item.name}</Typography>
                <Typography>
                  {item.count} × {item.price} ₼
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        <Divider />

        {/* Ödəniş Tipi Seçimi */}
        <Box>
          <Typography className="text-sm font-semibold mb-2">
            Ödəniş növü
          </Typography>
          <ToggleButtonGroup
            value={paymentType}
            exclusive
            onChange={(e, val) => val && setPaymentType(val)}
            fullWidth
            color="primary"
          >
            <ToggleButton value="cash">Nəğd</ToggleButton>
            <ToggleButton value="card">Kart</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Toplam və Əməliyyatlar */}
        <Box className="space-y-3">
          <Typography className="text-right font-bold text-purple-700">
            Toplam: {total} ₼
          </Typography>

          <Box className="flex justify-between gap-2">
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={onClose}
            >
              Ləğv et
            </Button>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => onConfirm(paymentType)}
              disabled={basketItems.length === 0}
            >
              Satışı Təsdiqlə
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default BasketDrawer;
