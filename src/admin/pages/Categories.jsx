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
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState('');
  const [parentId, setParentId] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get("http://104.248.36.17:7013/api/Categories")
      .then(res => setCategories(res.data.data))
      .catch(err => console.error("Kateqoriyalar alınmadı:", err));
  }, []);

  const handleOpen = () => {
    setFormValue('');
    setParentId('');
    setEditId(null);
    setOpen(true);
  };

  const handleEdit = (category) => {
    setFormValue(category.name);
    setParentId(category.parentCategoryId || '');
    setEditId(category.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://104.248.36.17:7013/api/Categories/${id}`)
      .then(() => setCategories(categories.filter(cat => cat.id !== id)))
      .catch(err => console.error("Silinmə zamanı xəta:", err));
  };

  const handleSave = () => {
    if (formValue.trim() === '') return;
    const newCategory = {
      name: formValue,
      parentId: parentId || null
    };

    if (editId !== null) {
      axios.put(`http://104.248.36.17:7013/api/Categories/${editId}`, {
        ...newCategory,
        id: editId
      })
        .then(() => {
          setCategories(categories.map(cat =>
            cat.id === editId ? { ...cat, ...newCategory } : cat
          ));
          setOpen(false);
        })
        .catch(err => console.error("Redaktə zamanı xəta:", err));
    } else {
      axios.post("http://104.248.36.17:7013/api/Categories", newCategory)
        .then(() => {
          // reload etmək daha yaxşıdır çünki id backenddən gəlir
          return axios.get("http://104.248.36.17:7013/api/Categories");
        })
        .then(res => {
          setCategories(res.data.data);
          setOpen(false);
        })
        .catch(err => console.error("Əlavə olunmadı:", err));
    }
  };

  return (
    <Box className="p-8 font-[Poppins] text-gray-800 space-y-6">
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

      <Typography className="text-gray-600 text-sm">
        Aşağıda məhsul kateqoriyalarını görə və idarə edə bilərsiniz.
      </Typography>

      <Paper className="rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHead className="bg-purple-50">
            <TableRow>
              <TableCell className="font-semibold text-gray-700">ID</TableCell>
              <TableCell className="font-semibold text-gray-700">Kateqoriya Adı</TableCell>
              <TableCell className="font-semibold text-gray-700">Ana Kateqoriya</TableCell>
              <TableCell className="font-semibold text-gray-700">Əməliyyat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((cat) => (
              <TableRow key={cat.id}>
                <TableCell>{cat.id}</TableCell>
                <TableCell>{cat.name}</TableCell>
                <TableCell>
                  {cat.parentCategoryId
                    ? categories.find(parent => parent.id === cat.parentCategoryId)?.name
                    : "-"}
                </TableCell>
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
          <FormControl fullWidth margin="dense">
            <InputLabel id="parent-label">Ana Kateqoriya</InputLabel>
            <Select
              labelId="parent-label"
              value={parentId}
              onChange={(e) => setParentId(e.target.value)}
              label="Ana Kateqoriya"
            >
              <MenuItem value="">Yoxdur (Ana)</MenuItem>
              {categories
                .filter(c => c.id !== editId)
                .map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
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
