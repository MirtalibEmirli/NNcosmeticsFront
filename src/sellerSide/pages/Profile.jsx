import { Card, CardContent, Typography, Button } from '@mui/material';
import { LogOut, Mail, User } from 'lucide-react';

const SellerProfile = () => {
  const fullName = 'Test User';
  const email = 'testuser@nncosmetics.az';

  const handleLogout = () => {
    // logout logic
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#f4f4fa]">
      <Card
        className="w-full max-w-lg bg-white/20 backdrop-blur-lg shadow-xl p-6 border border-purple-200"
        elevation={0}
      >
        <CardContent className="space-y-6">
          <Typography variant="h5" className="text-purple-700 font-bold">
            👤 Satıcı Profiliniz
          </Typography>

          <div className="flex items-center gap-3 text-gray-700">
            <User />
            <span className="font-medium">Ad Soyad:</span> {fullName}
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Mail />
            <span className="font-medium">Email:</span> {email}
          </div>

          <Button
            onClick={handleLogout}
            variant="contained"
            color="error"
            size="large"
            startIcon={<LogOut />}
            className="mt-4 hover:scale-105 transition-transform"
          >
            Çıxış Et
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerProfile;
