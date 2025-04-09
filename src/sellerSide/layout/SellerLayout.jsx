import React from "react";
import { Outlet } from "react-router-dom";
import SellerSidebar from "../components/SellerSidebar";

const SellerLayout = () => {
  return (
    <div className="min-h-screen flex bg-[#f9f9ff]">
      {/* Sol tərəf - Sidebar */}
      <SellerSidebar />

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default SellerLayout;
