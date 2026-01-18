import "./css/BookingCard.css";
function BookingCard({booking}) {
  return (
    <div className="booking-container">
      <div className="booking-image">
        <img src={booking.court_image} alt="" />
      </div>
      <div className="booking-info">
        <p>Booked By: {booking.user_name}</p>
        <p className="sport-name">
          {booking.sport_name} - Court {booking.court_number} - {booking.court_type}
        </p>
        <p className="court-price">{booking.booking_price} JOD / Hour</p>
        <p className="date">Date: {new Date(booking.booking_date).toLocaleDateString()}</p>
        <p className="time">Time: {booking.start_time.slice(0, 5)} - {booking.end_time.slice(0, 5)}</p>
      </div>
    </div>
  );
}

export default BookingCard;
