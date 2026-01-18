import "./css/BookCourtModal.css";
import { useState, useEffect } from "react";
import api from "../../api/axios";
import sendBookingEmail from "../../utils/sendBookingEmail";
function BookCourtModal({ court, onClose }) {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [timeSlots, setTimeSlots] = useState([]);
  const [booking, setBooking] = useState({
    booking_date: "",
    user_id: "",
    time_slot_id: "",
  });
  useEffect(() => {
    if (!booking.booking_date) {
      setTimeSlots([]);
      return;
    }
    const fetchTimeSlots = async () => {
      try {
        const fetchedTimeSlots = await api.get(
          `/user/time-slots/${court.id}/${booking.booking_date}`,
        );
        setTimeSlots(fetchedTimeSlots.data);
      } catch (err) {
        alert(err.message?.data?.error);
      }
    };
    fetchTimeSlots();
  }, [booking.booking_date, court.id]);
  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/user/book/${court.id}`, {
        booking_date: booking.booking_date,
        user_id: storedUser.id,
        time_slot_id: booking.time_slot_id,
      });
      alert("Court booked successfully");
      const courtResponse = await api.get(`/user/court/${court.id}`);
      const courtWithSport = courtResponse.data;
      const selectedSlot = timeSlots.find(
        (slot) => slot.id === Number(booking.time_slot_id),
      );
      await sendBookingEmail({
        user_name: storedUser.full_name,
        sport: courtWithSport.sport_name,
        court: `Court ${court.number} - ${court.court_type}`,
        date: booking.booking_date,
        time: `${selectedSlot.start_time.slice(0, 5)} - ${selectedSlot.end_time.slice(0, 5)}`,
        to_email: storedUser.email,
      });
      console.log("SPORT NAME:", courtWithSport.sport_name);
      onClose();
    } catch (err) {
      alert(err.message?.data?.error);
    }
  };
  return (
    <div className="book-court-container">
      <i onClick={onClose} className="fa-solid fa-delete-left"></i>
      <img src={court.image_url} alt="" />
      <div className="court-header">
        <p>
          Court {court.number} - {court.court_type}
        </p>
        <p className="court-price">
          <span className="price-amount">{court.price}</span>
          <span className="price-meta">JOD / hour</span>
        </p>
      </div>
      <div className="form-section">
        <form onSubmit={handleBooking} action="">
          <div className="input-wrapper">
            <label htmlFor="">Select a Date</label>
            <input
              value={booking.booking_date}
              onChange={(e) =>
                setBooking({ ...booking, booking_date: e.target.value })
              }
              type="date"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Choose a Time Slot</label>
            <select
              value={booking.time_slot_id}
              onChange={(e) =>
                setBooking({ ...booking, time_slot_id: e.target.value })
              }
              name=""
              id=""
              required
            >
              <option value="">Choose a time slot</option>
              {timeSlots.map((timeSlot) => (
                <option key={timeSlot.id} value={timeSlot.id}>
                  {timeSlot.start_time.slice(0, 5)} -{" "}
                  {timeSlot.end_time.slice(0, 5)}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Book Court</button>
        </form>
      </div>
    </div>
  );
}

export default BookCourtModal;
