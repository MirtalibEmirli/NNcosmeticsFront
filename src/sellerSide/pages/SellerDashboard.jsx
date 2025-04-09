import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

// Fake data (bunu API-dən gələcək dataya əvəzləyə bilərsən)
const mockSales = [
  { date: "2025-04-09", total: 120, paymentType: "cash" },
  { date: "2025-04-09", total: 80, paymentType: "card" },
  { date: "2025-04-08", total: 150, paymentType: "cash" },
];

const topProducts = [
  {
    name: "Lipstick KIKO",
    sales: 12,
    image:
      "https://www.kikocosmetics.com/_next/image?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2F2dcce228-58fb-42e4-8eb7-be0a82397d57&q=80&w=3840&av=v1",
  },
  {
    name: "Foundation Maybelline",
    sales: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jsHHML108DTUtWgLNT6DXpbQIZ29PY5Afg&s",
  },
  {
    name: "Liner Golden Rose",
    sales: 6,
    image:
      "https://strgimgr.umico.az/sized/840/53713-1fbb0fb0730599e58a5facc87dc40747.jpg",
  },
];

const Dashboard = () => {
  const [filter, setFilter] = useState("today");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Yükləmə effekti üçün süni gecikmə
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [filter]);

  const today = dayjs().format("YYYY-MM-DD");
  const currentMonth = dayjs().format("YYYY-MM");

  const filteredSales = mockSales.filter((sale) => {
    if (filter === "today") return sale.date === today;
    if (filter === "month") return sale.date.startsWith(currentMonth);
    return true;
  });

  const totalSales = filteredSales.reduce((sum, s) => sum + s.total, 0);

  const pieData = [
    {
      name: "Nəğd",
      value: filteredSales
        .filter((s) => s.paymentType === "cash")
        .reduce((sum, s) => sum + s.total, 0),
    },
    {
      name: "Kart",
      value: filteredSales
        .filter((s) => s.paymentType === "card")
        .reduce((sum, s) => sum + s.total, 0),
    },
  ];

  return (
    <Box className="space-y-6 font-[Poppins] text-gray-800">
      {/* Başlıq və filter */}
      <Box className="flex justify-between items-center">
        <Typography variant="h5" className="text-purple-700 font-bold">
          Satış Paneli - Dashboard
        </Typography>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="small"
        >
          <MenuItem value="today">Bugün</MenuItem>
          <MenuItem value="month">Bu Ay</MenuItem>
        </Select>
      </Box>

      {/* Statistik kartlar */}
      <Grid container spacing={3}>
        {["Bugünkü Satış", "Endirimli Satışlar", "Satış Sayısı"].map(
          (label, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className="p-5 rounded-xl bg-gradient-to-br from-pink-200 to-purple-100 shadow">
                <Typography className="text-sm text-gray-600">{label}</Typography>
                {loading ? (
                  <Skeleton height={30} width="60%" />
                ) : (
                  <Typography className="text-2xl font-bold text-purple-800">
                    {index === 0
                      ? `${totalSales} ₼`
                      : index === 2
                      ? filteredSales.length
                      : "0 ₼"}
                  </Typography>
                )}
              </Paper>
            </Grid>
          )
        )}
      </Grid>

      {/* Pie chart */}
      <Paper className="p-6 rounded-xl shadow bg-white">
        <Typography className="font-semibold text-purple-700 mb-4">
          Ödəniş Növü ilə Satışlar
        </Typography>
        {loading ? (
          <Skeleton variant="rounded" height={300} />
        ) : filteredSales.length === 0 ? (
          <Typography className="text-center text-gray-500 py-10">
            Bu tarixə satış yoxdur.
          </Typography>
        ) : (
          <Box className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  <Cell fill="#f472b6" />
                  <Cell fill="#8b5cf6" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        )}
      </Paper>

      {/* Ən çox satılan məhsullar */}
      <Paper className="p-6 rounded-xl shadow bg-white">
        <Typography className="font-semibold text-purple-700 mb-4">
          Ən Çox Satılan Məhsullar
        </Typography>
        <Grid container spacing={3}>
          {(loading ? Array(3).fill({}) : topProducts).map((prod, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              {loading ? (
                <Skeleton variant="rounded" height={80} />
              ) : (
                <Paper className="p-4 rounded-lg flex items-center gap-4 hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <Box>
                    <Typography className="font-semibold text-gray-800">
                      {prod.name}
                    </Typography>
                    <Typography className="text-sm text-gray-500">
                      {prod.sales} sət
                    </Typography>
                  </Box>
                </Paper>
              )}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Dashboard;
