import React from "react";
import { Outlet } from "react-router-dom";
import AuthenticatedSidebar from "./AuthenticatedSidebar";
import Navbar from "../components/Ui/Navbar";
import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div>
        <Navbar />
      </div>
      <div>
        <AuthenticatedSidebar />
      </div>
      <main className="main-container">
        <div className="container">
        {/* This is where nested routes (e.g. Dashboard) render */}
        <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
