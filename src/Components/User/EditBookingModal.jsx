import { useState, useEffect } from "react";
import "./css/EditBookingModal.css";
import api from "../../api/axios";
function EditBookingModal({ booking, onClose, onUpdated }) {
  const [timeSlots, setTimeSlots] = useState([]);
  const [newDate, setNewDate] = useState(booking.booking_date.slice(0, 10));
  const [newTime, setNewTime] = useState(booking.time_slot_id);
  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const fetchedTimeSlots = await api.get(
          `/user/time-slots/${booking.court_id}/${newDate}/${booking.id}`
        );
        setTimeSlots(fetchedTimeSlots.data);
      } catch (err) {
        alert(err.message?.data?.error || "request failed");
      }
    };
    fetchTimeSlots();
  }, [newDate, booking.court_id]);
  const handleEditBooking = async (e) => {
    e.preventDefault();
    try {
      await api.patch(`/user/bookings/${booking.id}`, {
        booking_date: newDate,
        time_slot_id: newTime,
      });
      const selectedSlot = timeSlots.find(
      (slot) => slot.id === Number(newTime)
    );
    onUpdated({
      id: booking.id,
      booking_date: newDate,
      time_slot_id: newTime,
      start_time: selectedSlot.start_time,
      end_time: selectedSlot.end_time,
    });
      alert("Booking updated successfully");
      onClose();
    } catch (err) {
      alert(err.message?.data?.error);
    }
  };
  return (
    <div className="book-court-container">
      <i onClick={onClose} className="fa-solid fa-delete-left"></i>
      <img src={booking.court_image} alt="" />
      <p>
        Court {booking.court_number} - {booking.court_type}
      </p>
      <div className="form-section">
        <form onSubmit={handleEditBooking}>
          <div className="input-wrapper">
            <label htmlFor="">Select a Date</label>
            <input
              value={newDate}
              type="date"
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Choose a Time Slot</label>
            <select
              value={newTime}
              name=""
              id=""
              onChange={(e) => setNewTime(e.target.value)}
            >
              {timeSlots.map((timeSlot) => (
                <option key={timeSlot.id} value={timeSlot.id}>
                  {timeSlot.start_time.slice(0, 5)} -{" "}
                  {timeSlot.end_time.slice(0, 5)}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Save changes</button>
        </form>
      </div>
    </div>
  );
}

export default EditBookingModal;
