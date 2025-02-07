// src/components/MainLayout.tsx
import React from "react";
import Header from "../Header/index";
import Footer from "../Footer/index";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mt-4">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;