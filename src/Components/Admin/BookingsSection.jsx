import BookingCard from "./BookingCard";
import "./css/BookingsSection.css";
import { useState, useEffect } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router";
function BookingsSection() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"))
  const [bookings, setBookings] = useState([])
  useEffect(()=>{
    const fetchBookings = async()=>{
      try{
      const fetchedBookings = await api.get("/admin/bookings", {
        headers: {
          "x-role": storedUser.role
        }
      })
      setBookings(fetchedBookings.data)
      } catch(err){
        alert(err.response?.data?.message || "Failed to load bookings.")
        if(err.response?.status===403){
          navigate("/home");
        }
      }
    }
    fetchBookings();
  }, [])

  return (
      <div className="all-bookings-container">
        {bookings.map((booking)=>(
          <BookingCard key={booking.id}
          booking={booking}
        />
        ))}
      </div>
  );
}

export default BookingsSection;
