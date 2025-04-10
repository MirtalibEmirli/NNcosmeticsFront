import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const roleMap = {
  Admin: "Admin",
  User: "0",
};

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    const decoded = jwt_decode(token);
    const userRole = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    if (userRole === roleMap[role]) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  } catch (err) {
    console.error("Token decoding error:", err);
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
