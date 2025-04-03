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

const sellers = [
  { name: 'Aygün Məmmədova', username: 'aygun123', status: 'Aktiv' },
  { name: 'Elçin Həsənov', username: 'elchin85', status: 'Passiv' },
  { name: 'Nigar Qasımova', username: 'nigar_q', status: 'Aktiv' }
];

export default function Sellers() {
  return (
    <Box className="space-y-8">
      {/* Başlıq */}
      <Box className="flex justify-between items-center">
        <Typography variant="h5" className="text-purple-900 font-bold">
          Satıcılar
        </Typography>
        <Button variant="contained" color="secondary">
          Yeni Satıcı Əlavə Et
        </Button>
      </Box>

      {/* Table */}
      <Paper className="p-6 bg-white shadow-sm">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ad</TableCell>
              <TableCell>İstifadəçi Adı</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((seller, idx) => (
              <TableRow key={idx}>
                <TableCell>{seller.name}</TableCell>
                <TableCell>{seller.username}</TableCell>
                <TableCell>{seller.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
