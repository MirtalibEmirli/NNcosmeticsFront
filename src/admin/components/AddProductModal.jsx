import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import ProductsForm from '../pages/ProductsForm';

export default function AddProductModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Yeni Məhsul Əlavə Et</DialogTitle>
      <DialogContent dividers>
        <ProductsForm onClose={onClose} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Bağla
        </Button>
      </DialogActions>
    </Dialog>
  );
}
