import MyBookingsSection from "../../Components/User/MyBookingsSection";
import "./css/MyBookings.css";
function MyBooking() {
  return (
    <div className="myBookings-page">
      <h1>My Bookings</h1>
      <p>Upcoming Bookings</p>
      <MyBookingsSection />
    </div>
  );
}

export default MyBooking;
