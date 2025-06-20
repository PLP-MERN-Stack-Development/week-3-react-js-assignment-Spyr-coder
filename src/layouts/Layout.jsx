// src/layouts/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 md:px-12 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
