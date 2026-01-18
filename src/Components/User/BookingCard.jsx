import "./css/BookingCard.css"
function BookingCard({ booking, onEdit, onDelete}) {
  return (
    <div className="myBooking-container">
      <div className="booking-image">
        <img src={booking.court_image} alt="" />
      </div>
      <div className="booking-info">
        <p className="sport-name">
          {booking.sport_name} - Court {booking.court_number} - {booking.court_type}
        </p>
        <p className="court-price">{booking.booking_price} JOD / hour</p>
        <p className="date">Date: {new Date(booking.booking_date).toLocaleDateString()}</p>
        <p className="time">Time: {booking.start_time.slice(0, 5)} - {booking.end_time.slice(0, 5)}</p>
      </div>
      <div className="buttons-container">
        <button onClick={onEdit}>Edit Booking</button>
        <button onClick={()=>{
          if(window.confirm("Are you sure you want to delete this booking?")){
            onDelete();
          }
        }}>Delete Booking</button>
        </div>
    </div>
  );
}

export default BookingCard;
