import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button
} from '@mui/material';
import { useState } from 'react';
import SalesChartsLayout from '../components/charts/SalesChartsLayout';

export default function StatisticsPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedSeller, setSelectedSeller] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const sellers = ['Bütün satıcılar', 'Aygün', 'Nurlan', 'Zəhra'];

  return (
    <Box className="p-8 space-y-8 font-[Poppins] text-gray-800">
      <Typography variant="h5" className="text-2xl font-bold text-purple-800">
        Satış Statistikası
      </Typography>

      {/* Filtrlər */}
      <Paper className="p-6 shadow-sm bg-white rounded-xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Başlanğıc Tarix"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Son Tarix"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Satıcı</InputLabel>
              <Select
                value={selectedSeller}
                onChange={(e) => setSelectedSeller(e.target.value)}
                label="Satıcı"
              >
                {sellers.map((seller, idx) => (
                  <MenuItem value={seller} key={idx}>
                    {seller}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth>
              <InputLabel>Ödəniş Tipi</InputLabel>
              <Select
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                label="Ödəniş Tipi"
              >
                <MenuItem value="">Hamısı</MenuItem>
                <MenuItem value="cash">Nəğd</MenuItem>
                <MenuItem value="card">Kart</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={1} className="flex items-center justify-end">
            <Button
              variant="contained"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md shadow"
              fullWidth
            >
              Axtar
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Statistika Kartları */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className="p-5 rounded-xl bg-purple-50 border border-purple-100 shadow text-center">
            <Typography className="text-gray-500 mb-1">Ümumi Satış</Typography>
            <Typography variant="h5" className="text-purple-700 font-bold">
              ₼ 1,250.00
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="p-5 rounded-xl bg-purple-50 border border-purple-100 shadow text-center">
            <Typography className="text-gray-500 mb-1">Satışların Sayı</Typography>
            <Typography variant="h5" className="text-purple-700 font-bold">
              85
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="p-5 rounded-xl bg-purple-50 border border-purple-100 shadow text-center">
            <Typography className="text-gray-500 mb-1">Ən çox Satıcı</Typography>
            <Typography variant="h5" className="text-purple-700 font-bold">
              Nurlan
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Diaqramlar Alt-Alt + Responsiv */}
      <SalesChartsLayout className="w-full flex flex-col" />
    </Box>
  );
}
