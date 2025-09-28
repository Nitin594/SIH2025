import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Ui/Navbar";
import Footer from "../components/Ui/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Nested route content will be injected here */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
