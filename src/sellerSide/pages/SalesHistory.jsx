import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  CircularProgress,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { motion } from "framer-motion";
import dayjs from "dayjs";

// Simulyasiya edilmiş backend məlumatları
const mockSales = [
  {
    id: 1,
    date: "2025-04-09T10:23:00",
    seller: "Zəhra",
    paymentType: "cash",
    total: 120,
    itemsCount: 3,
    returns: { count: 1, amount: 40 },
  },
  {
    id: 2,
    date: "2025-04-08T14:15:00",
    seller: "Aygün",
    paymentType: "card",
    total: 200,
    itemsCount: 5,
    returns: null,
  },
  {
    id: 3,
    date: "2025-04-07T17:45:00",
    seller: "Nurlan",
    paymentType: "cash",
    total: 150,
    itemsCount: 2,
    returns: null,
  },
];

const SalesHistory = () => {
  const [startDate, setStartDate] = useState(dayjs().subtract(7, "day"));
  const [endDate, setEndDate] = useState(dayjs());
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filteredData = mockSales.filter((sale) => {
        const saleDate = dayjs(sale.date);
        return saleDate.isAfter(startDate.subtract(1, "day")) && saleDate.isBefore(endDate.add(1, "day"));
      });
      setFiltered(filteredData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [startDate, endDate]);

  // Statistik hesablamalar
  const total = filtered.reduce((sum, s) => sum + s.total, 0);
  const totalReturns = filtered.reduce((sum, s) => sum + (s.returns?.amount || 0), 0);
  const cashTotal = filtered
    .filter((s) => s.paymentType === "cash")
    .reduce((sum, s) => sum + s.total, 0);
  const cardTotal = filtered
    .filter((s) => s.paymentType === "card")
    .reduce((sum, s) => sum + s.total, 0);

  return (
    <Box className="space-y-6 font-[Poppins] text-gray-800">
      {/* Tarix seçimi və başlıq */}
      <Box className="flex flex-wrap gap-4 items-center justify-between">
        <Typography variant="h5" className="text-purple-700 font-bold">
          Satış Tarixçəsi
        </Typography>
        <Box className="flex gap-3 items-center">
          <DatePicker
            label="Başlanğıc Tarix"
            value={startDate}
            onChange={(val) => setStartDate(val)}
          />
          <DatePicker
            label="Son Tarix"
            value={endDate}
            onChange={(val) => setEndDate(val)}
          />
        </Box>
      </Box>

      {/* Statistik göstəricilər */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className="p-5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl shadow">
            <Typography className="text-sm text-gray-600">Ümumi Satış</Typography>
            <Typography className="text-2xl font-bold text-purple-800">{total} ₼</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="p-5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl shadow">
            <Typography className="text-sm text-gray-600">Nəğd Satış</Typography>
            <Typography className="text-2xl font-bold text-purple-800">{cashTotal} ₼</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="p-5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl shadow">
            <Typography className="text-sm text-gray-600">Kart Satış</Typography>
            <Typography className="text-2xl font-bold text-purple-800">{cardTotal} ₼</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="p-5 bg-purple-50 border border-purple-200 rounded-xl shadow">
            <Typography className="text-sm text-gray-600">Geri Qaytarmalar</Typography>
            <Typography className="text-2xl font-bold text-red-600">{totalReturns} ₼</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Satış Kartları */}
      {loading ? (
        <Box className="flex justify-center mt-10">
          <CircularProgress />
        </Box>
      ) : filtered.length === 0 ? (
        <Paper className="p-5 text-center">Bu tarix aralığında satış tapılmadı.</Paper>
      ) : (
        <Grid container spacing={3}>
          {filtered.map((sale) => (
            <Grid item xs={12} md={6} lg={4} key={sale.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper className="p-5 rounded-xl shadow space-y-2">
                  <Typography><strong>Satıcı:</strong> {sale.seller}</Typography>
                  <Typography><strong>Tarix:</strong> {dayjs(sale.date).format("DD MMM YYYY HH:mm")}</Typography>
                  <Typography><strong>Ödəniş:</strong> {sale.paymentType === "cash" ? "Nəğd" : "Kart"}</Typography>
                  <Typography><strong>Məhsul sayı:</strong> {sale.itemsCount}</Typography>
                  <Typography><strong>Məbləğ:</strong> {sale.total} ₼</Typography>
                  {sale.returns && (
                    <>
                      <Divider />
                      <Typography className="text-red-600"><strong>Geri Qaytarılan:</strong> {sale.returns.count} məhsul, {sale.returns.amount} ₼</Typography>
                    </>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SalesHistory;
