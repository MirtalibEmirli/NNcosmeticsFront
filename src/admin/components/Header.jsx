import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-full flex justify-between items-center bg-white p-4 shadow">
      <h1 className="text-xl font-semibold text-purple-700">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">Admin</span>
        <button
          onClick={handleLogout}
          className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;

