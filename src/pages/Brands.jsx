import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';

const brands = [
  { name: 'L’Oreal', origin: 'Fransa' },
  { name: 'Maybelline', origin: 'ABŞ' },
  { name: 'Golden Rose', origin: 'Türkiyə' }
];

export default function Brands() {
  return (
    <Box className="space-y-8">
      {/* Başlıq */}
      <Box className="flex justify-between items-center">
        <Typography variant="h5" className="text-purple-900 font-bold">
          Brendlər
        </Typography>
        <Button variant="contained" color="secondary">
          Yeni Brend Əlavə Et
        </Button>
      </Box>

      {/* Table */}
      <Paper className="p-6 bg-white shadow-sm">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ad</TableCell>
              <TableCell>Mənşə Ölkəsi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {brands.map((brand, idx) => (
              <TableRow key={idx}>
                <TableCell>{brand.name}</TableCell>
                <TableCell>{brand.origin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
