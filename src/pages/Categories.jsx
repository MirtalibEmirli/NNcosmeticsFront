import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton
} from '@mui/material';
import { useState } from 'react';
import { Edit, Delete } from '@mui/icons-material';

const initialCategories = [
  { id: 1, name: 'Makeup' },
  { id: 2, name: 'Skincare' },
  { id: 3, name: 'Jewelry' },
  { id: 4, name: 'Hair Care' }
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState('');
  const [editId, setEditId] = useState(null);

  const handleOpen = () => {
    setFormValue('');
    setEditId(null);
    setOpen(true);
  };

  const handleEdit = (category) => {
    setFormValue(category.name);
    setEditId(category.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const handleSave = () => {
    if (formValue.trim() === '') return;
    if (editId !== null) {
      setCategories(
        categories.map((cat) =>
          cat.id === editId ? { ...cat, name: formValue } : cat
        )
      );
    } else {
      const newId = categories.length ? Math.max(...categories.map(c => c.id)) + 1 : 1;
      setCategories([...categories, { id: newId, name: formValue }]);
    }
    setOpen(false);
  };

  return (
    <Box className="p-8 font-[Poppins] text-gray-800 space-y-6">
      {/* Başlıq */}
      <Box className="flex items-center justify-between">
        <Typography variant="h5" className="font-bold text-purple-800 text-2xl">
          Kateqoriyalar
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          className="bg-purple-600 hover:bg-purple-700 shadow-md text-white font-semibold px-5 py-2 rounded-lg"
        >
          YENİ KATEQORIYA
        </Button>
      </Box>

      {/* Açıklama */}
      <Typography className="text-gray-600 text-sm">
        Aşağıda məhsul kateqoriyalarını görə və idarə edə bilərsiniz.
      </Typography>

      {/* Cədvəl */}
      <Paper className="rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHead className="bg-purple-50">
            <TableRow>
              <TableCell className="font-semibold text-gray-700">ID</TableCell>
              <TableCell className="font-semibold text-gray-700">Kateqoriya Adı</TableCell>
              <TableCell className="font-semibold text-gray-700">Əməliyyat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((cat) => (
              <TableRow
                key={cat.id}
                className="hover:bg-purple-50 transition duration-200 ease-in-out"
              >
                <TableCell>{cat.id}</TableCell>
                <TableCell>{cat.name}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(cat)} color="primary">
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(cat.id)} color="error">
                    <Delete fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Modal */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editId !== null ? 'Kateqoriyanı Redaktə Et' : 'Yeni Kateqoriya Əlavə Et'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Kateqoriya Adı"
            fullWidth
            variant="outlined"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} className="text-gray-600">Ləğv Et</Button>
          <Button onClick={handleSave} className="bg-purple-600 text-white hover:bg-purple-700">
            Yadda Saxla
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
