import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function RealEstateApp() {
  const [currentView, setCurrentView] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (admin = false) => {
    setIsLoggedIn(true);
    setIsAdmin(admin);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setCurrentView("home");
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      if (currentView === "login") {
        return <div className="text-center text-green-800">Login Form Placeholder</div>;
      } else if (currentView === "registration") {
        return <div className="text-center text-green-800">Registration Form Placeholder</div>;
      } else {
        return <div className="text-center text-green-800">What You Need Component Placeholder</div>;
      }
    } else if (isAdmin) {
      return <div className="text-center text-green-800">Admin Dashboard Placeholder</div>;
    } else {
      return <div className="text-center text-green-800">Client Dashboard Placeholder</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} onLogout={handleLogout} onSwitchView={setCurrentView} />
      <main className="container mx-auto py-6 px-4">{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default RealEstateApp;
