import React from "react";
import { NavLink } from "react-router-dom";

const SellerSidebar = () => {
  const links = [
    { path: "/seller/dashboard", label: "Dashboard" },
    { path: "/seller/sell", label: "Satış Et" },
    { path: "/seller/history", label: "Tarixçə" },
    { path: "/seller/profile", label: "Profil" },
    { path: "/seller/contact", label: "Bizimlə əlaqə" },
  ];

  return (
    <div className="bg-[#131325] text-white min-h-screen w-64 p-6 space-y-6 shadow-lg">
      <h1 className="text-xl font-bold border-b pb-4">Satıcı Paneli</h1>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `block py-2 px-3 rounded-md ${
              isActive ? "bg-purple-600 text-white" : "hover:bg-purple-900"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default SellerSidebar;
