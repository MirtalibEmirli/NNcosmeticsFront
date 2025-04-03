import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from '@mui/material';

const returnRequests = [
  {
    product: 'Üz yuma geli',
    seller: 'aygun123',
    reason: 'Məhsul qüsurludur',
    date: '03.04.2025'
  },
  {
    product: 'Qızıl sırğa',
    seller: 'nigar_q',
    reason: 'Müştəri narazıdır',
    date: '02.04.2025'
  }
];

export default function Returns() {
  return (
    <Box className="space-y-8">
      <Typography variant="h5" className="text-purple-900 font-bold">
        Geri Qaytarma Tələbləri
      </Typography>

      <Paper className="p-6 bg-white shadow-sm">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Məhsul</TableCell>
              <TableCell>Satıcı</TableCell>
              <TableCell>Səbəb</TableCell>
              <TableCell>Tarix</TableCell>
              <TableCell>Əməliyyat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {returnRequests.map((req, idx) => (
              <TableRow key={idx}>
                <TableCell>{req.product}</TableCell>
                <TableCell>{req.seller}</TableCell>
                <TableCell>{req.reason}</TableCell>
                <TableCell>{req.date}</TableCell>
                <TableCell>
                  <Box className="flex space-x-2">
                    <Button variant="outlined" color="success" size="small">
                      Təsdiqlə
                    </Button>
                    <Button variant="outlined" color="error" size="small">
                      İmtina et
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
