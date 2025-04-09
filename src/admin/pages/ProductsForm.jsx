import { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import ImageUploadInput from '../components/ImageUploadInput';

export default function ProductsForm(onClose ) {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [brandId, setBrandId] = useState('');
  const [imageFile, setImageFile] = useState(null);

  // Dummy kateqoriya və marka listləri
  const categories = [
    { id: 1, name: 'Pomada' },
    { id: 2, name: 'Liner' },
    { id: 3, name: 'Tənalni' }
  ];

  const brands = [
    { id: 1, name: 'Golden Rose' },
    { id: 2, name: 'L’Oreal' },
    { id: 3, name: 'Maybelline' }
  ];

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('CategoryId', categoryId);
    formData.append('BrandId', brandId);
    formData.append('Image', imageFile);

    try {
      const response = await fetch('https://api.nncosmetics.az/api/products', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      console.log('Göndərildi:', result);
      // TODO: notifikasiya və redirect əlavə et
    } catch (error) {
      console.error('Xəta baş verdi:', error);
    }
    if (onClose) onClose();
  };

  return (
    <Paper className="p-6 max-w-xl mx-auto space-y-5">
      <Typography variant="h5" className="text-purple-900 font-bold">
        Yeni Məhsul Əlavə Et
      </Typography>

      <TextField
        fullWidth
        label="Məhsulun Adı"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        select
        fullWidth
        label="Kateqoriya"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        {categories.map((cat) => (
          <MenuItem key={cat.id} value={cat.id}>
            {cat.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        fullWidth
        label="Brend"
        value={brandId}
        onChange={(e) => setBrandId(e.target.value)}
      >
        {brands.map((brand) => (
          <MenuItem key={brand.id} value={brand.id}>
            {brand.name}
          </MenuItem>
        ))}
      </TextField>

      <ImageUploadInput onFileSelect={setImageFile} />

      <Box className="pt-4">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!name || !categoryId || !brandId || !imageFile}
        >
          Yadda saxla
        </Button>
      </Box>
    </Paper>
  );
}
