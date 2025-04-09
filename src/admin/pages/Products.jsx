import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar
} from '@mui/material';
import { useState } from 'react';
import AddProductModal from '../components/AddProductModal';
const products = [
  {
    name: 'Qırmızı Pomada',
    category: 'Pomada',
    brand: 'Golden Rose',
    image: 'https://static1.biotus.ua/media/catalog/product/c/r/crg-00011-7.jpg?store=az&image-type=image'
  },
  {
    name: 'Black Liner',
    category: 'Liner',
    brand: 'Maybelline',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XR3zb-DteJOJHnjZ6ZWwSM3KC6MjBPSdIQ&s'
  },
  {
    name: 'Mat Tənalni',
    category: 'Tənalni',
    brand: 'L’Oreal',
    image: 'https://img.viplife.az/Images/Products/1502054/main.jpg'
  }
];

export default function Products() {
  const [open, setOpen] = useState(false);

  return (
    <Box className="space-y-8">
      <Box className="flex justify-between items-center">
        <Typography variant="h5" className="text-purple-900 font-bold">
          Məhsullar
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
          Yeni Məhsul Əlavə Et
        </Button>
      </Box>

      <AddProductModal open={open} onClose={() => setOpen(false)} />

      <Paper className="p-6 bg-white shadow-sm">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Şəkil</TableCell>
              <TableCell>Ad</TableCell>
              <TableCell>Kateqoriya</TableCell>
              <TableCell>Brend</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Avatar src={product.image} alt={product.name} />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}