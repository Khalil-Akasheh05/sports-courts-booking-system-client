import BookingCard from "./BookingCard";
import "./css/MyBookingsSection.css";
import { useState, useEffect } from "react";
import EditBookingModal from "./EditBookingModal";
import api from "../../api/axios";
function MyBookingsSection() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const fetchedBookings = await api.get(`user/bookings/${storedUser.id}`);
        setBookings(fetchedBookings.data);
      } catch (err) {
        alert(err.response?.data?.message || "Failed to load bookings.");
      }
    };
    fetchBookings();
  }, []);
  const handleDeleteBooking = async (id) => {
    try {
      await api.delete(`/user/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b.id !== id));
      alert("Booking successfully deleted");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete booking. Please try again.");
    }
  };
  const handleBookingUpdated = (updated) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === updated.id
          ? {
              ...b,
              booking_date: updated.booking_date,
              time_slot_id: updated.time_slot_id,
              start_time: updated.start_time,
              end_time: updated.end_time,
            }
          : b
      )
    );
  };

  return (
    <div className="myBookings-container">
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking}
          onEdit={() => setSelectedBooking(booking)}
          onDelete={() => handleDeleteBooking(booking.id)}
        />
      ))}
      {selectedBooking && (
        <EditBookingModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onUpdated={handleBookingUpdated}
        />
      )}
    </div>
  );
}

export default MyBookingsSection;
