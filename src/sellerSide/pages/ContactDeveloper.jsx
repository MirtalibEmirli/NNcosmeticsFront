import { Button, Typography } from '@mui/material';
import { MessageCircle } from 'lucide-react';

const ContactDeveloper = () => {
  return (
    <div className="min-h-[70vh] px-8 py-16 bg-[#f6f6fa]">
      <Typography variant="h4" className="text-purple-700 font-bold mb-4 flex items-center gap-2">
        <MessageCircle /> Developerlə Əlaqə
      </Typography>

      <Typography className="mb-6 text-gray-700 max-w-xl">
        Əgər hər hansı bir texniki probleminiz və ya təklifiniz varsa, bizimlə əlaqə saxlamaq üçün aşağıdakı WhatsApp düyməsindən istifadə edin.
      </Typography>

      <a
        href="https://wa.me/994103659838"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            background: 'linear-gradient(to right, #25D366, #128C7E)',
            fontWeight: 'bold',
            color: 'white',
            px: 4,
            py: 1.5,
            borderRadius: 3,
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            },
          }}
        >
          💬 WhatsApp ilə Yaz
        </Button>
      </a>
    </div>
  );
};

export default ContactDeveloper;
