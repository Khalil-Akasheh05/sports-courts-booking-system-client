import React from "react";
import StatsCards from "../../Components/Admin/StatsCards";
import LatestBookings from "../../Components/Admin/LatestBookings";
import QuickActions from "../../Components/Admin/QuickActions";
import "./css/Dashboard.css";
function Dashboard() {
  return (
    <div className="admin-dashbaord-page">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p className="subtitle">System Overview & Live Insights</p>
      </header>
      <StatsCards />
      <div className="dashboard-main-content">
        <LatestBookings />
        <QuickActions />
      </div>
    </div>
  );
}

export default Dashboard;
