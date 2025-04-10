import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://104.248.36.17:7013/api/Login", {
        email,
        password,
      });

      const token = response.data.accessToken; // ✅ typo düzəldildi
      console.log("Gələn token:", token);

      const decoded = jwt_decode(token);
      console.log("Decoded token:", decoded);

      const role =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  
    
      localStorage.setItem("token", token);
      localStorage.setItem("userId", decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
      localStorage.setItem("role", role);
      if (role === "Admin") {
        navigate("/admin/dashboard");
      } else if (role === "0") {
        navigate("/seller/dashboard");
      }
        

      
    } catch (err) {
      console.error("Login error:", err);
      alert("Giriş uğursuz oldu.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex w-full max-w-6xl shadow-xl rounded-2xl overflow-hidden">
        {/* Sağ panel - Login form */}
        <div className="w-full md:w-1/2 bg-[#0f0f1a] p-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
              Welcome Back
            </h2>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block mb-1 text-sm text-white">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="example@nncosmetics.az"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 rounded-md font-semibold text-lg shadow-md hover:scale-105 transition-transform"
              >
                Sign in
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
