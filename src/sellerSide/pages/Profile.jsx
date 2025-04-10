import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { LogOut, Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://104.248.36.17:7013/api/Login/${userId}`)
        .then((res) => setUser(res.data))
        .catch((err) => {
          console.error("İstifadəçi tapılmadı:", err);
          // alert("İstifadəçi məlumatı alınmadı.");
        });
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    navigate("/");
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
            <span className="font-medium">Ad Soyad:</span> {user?.fullName || "Yüklənir..."}
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Mail />
            <span className="font-medium">Email:</span> {user?.email || "Yüklənir..."}
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

export default Profile;
