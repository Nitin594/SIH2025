import React from "react";
import { Outlet } from "react-router-dom";
import AuthenticatedSidebar from "./AuthenticatedSidebar";
import Navbar from "../components/Ui/Navbar";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Navbar />
      <AuthenticatedSidebar />
      <main>
        {/* This is where nested routes (e.g. Dashboard) render */}
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
