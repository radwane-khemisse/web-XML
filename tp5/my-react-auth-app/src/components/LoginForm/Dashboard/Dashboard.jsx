import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <img
            src="/images/enset_logo.png"
            alt="ENSET Logo"
            className="logo"
        />
        <nav className="nav-links">
          <a href="#"> Dashboard</a>
          <a href="#"> Products</a>
          <a href="#"> Upload File</a>
          <button className="logout-btn" onClick={handleLogout}>
             Logout
          </button>
        </nav>
      </aside>
      <main className="main-content">
      </main>
    </div>
  );
};

export default Dashboard;
