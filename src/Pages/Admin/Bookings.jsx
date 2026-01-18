import BookingsSection from "../../Components/Admin/BookingsSection";
import "./css/Bookings.css";
function Bookings() {
  return (
    <div className="bookings-page">
      <div className="bookings-header">
        <h1>Bookings</h1>
        <p>All Bookings</p>
      </div>
      <BookingsSection />
    </div>
  );
}

export default Bookings;
