import "./css/StatsCards.css";
import { useState, useEffect } from "react";
import api from "../../api/axios";
function StatsCards() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [stats, setStats] = useState([]);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const stats = await api.get("/admin/stats", {
          headers: {
            "x-role": storedUser.role,
          },
        });
        const formattedStats = [
          { label: "Total Revenue", value: `$${stats.data.total_revenue}` },
          { label: "Total Bookings", value: stats.data.total_bookings },
          { label: "Total Users", value: stats.data.total_users },
        ];
        setStats(formattedStats);
      } catch (err) {
        alert(err.response?.data?.message || "Failed to load stats.");
      }
    };
    fetchStats();
  }, []);
  return (
    <div className="stats">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <h3>{stat.label}</h3>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
