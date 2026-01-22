import "./css/LatestBookings.css";
import { useState, useEffect } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router";
function LatestBookings() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [latestBookings, setLatestBookings] = useState([]);
  useEffect(() => {
    const fetchLatestBookings = async () => {
      try {
        const bookings = await api.get("/admin/latest-bookings", {
          headers: {
            "x-role": storedUser.role,
          },
        });
        setLatestBookings(bookings.data);
      } catch (err) {
        alert(err.response?.data?.message || "Failed to load latest bookings.");
        if(err.response?.status===403){
          navigate("/home");
        }
      }
    };
    fetchLatestBookings();
  }, []);
  return (
    <div className="activity-section">
      <h2>Latest Bookings</h2>
      <div className="activity-table-wrapper">
        <table className="activity-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Sport</th>
              <th>Court</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {latestBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.user_name}</td>
                <td>{booking.sport_name}</td>
                <td>Court {booking.court_number}</td>
                <td>{booking.booking_date}</td>
                <td>
                  {booking.start_time.slice(0, 5)} - {booking.end_time.slice(0, 5)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LatestBookings;
