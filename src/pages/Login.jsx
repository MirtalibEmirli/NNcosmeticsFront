import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


 
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy token-based redirect logic
    const fakeToken = {
      token: "xyz123",
      role: "admin", // dəyiş: 'user' => seller yönləndirməsi üçün
    };

    if (fakeToken.role === "admin") {
      navigate("/"); // Admin dashboard
    } else {
      navigate("/seller"); // Seller panel
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex w-full max-w-6xl shadow-xl rounded-2xl overflow-hidden">
        {/* Left - Animation background */}
        <div className="w-1/2 hidden md:flex items-center justify-center bg-black relative overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/9RI5UmdbMhU?autoplay=1&mute=1&loop=1&playlist=9RI5UmdbMhU&controls=0&showinfo=0&modestbranding=1"
            title="Cosmetics Animation"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
          />
          
        </div>

        {/* Right - Login form */}
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
                  required
                  className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="example@nncosmetics.az"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-white">Password</label>
                <input
                  type="password"
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
