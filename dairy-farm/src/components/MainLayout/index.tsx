import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header isLoggedIn={false} />
      <main className="container mt-4">
        <Outlet /> {/* This renders the current page's content dynamically */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
