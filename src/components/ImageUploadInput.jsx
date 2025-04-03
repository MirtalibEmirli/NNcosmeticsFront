import { useState } from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';

export default function ImageUploadInput({ onFileSelect }) {
  const [fileName, setFileName] = useState('');
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setPreview(URL.createObjectURL(file));

    if (onFileSelect) {
      onFileSelect(file); // valideyn komponentə file ötür
    }
  };

  return (
    <Box className="space-y-2">
      <Typography variant="subtitle2">Məhsul şəkli yüklə (.jpeg, .png)</Typography>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        id="image-upload"
        style={{ display: 'none' }}
      />
      <label htmlFor="image-upload">
        <Button variant="outlined" component="span">
          ŞƏKİL SEÇ
        </Button>
      </label>

      {fileName && (
        <Typography variant="body2" className="text-gray-600">
          Seçildi: {fileName}
        </Typography>
      )}

      {preview && (
        <Avatar
          src={preview}
          alt="Preview"
          variant="rounded"
          sx={{ width: 120, height: 120, borderRadius: 2 }}
        />
      )}
    </Box>
  );
}
