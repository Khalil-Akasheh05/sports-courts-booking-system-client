import CourtCard from "./CourtCard";
import "./css/CourtsSection.css";
import { useState, useEffect } from "react";
import BookCourtModal from "./BookCourtModal";
import api from "../../../api/axios";
import { useParams } from "react-router";
function CourtsSection() {
  const { sportId } = useParams();
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [courts, setCourts] = useState([]);
  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const fetchedCourts = await api.get(`/user/courts/${sportId}`);
        setCourts(fetchedCourts.data);
      } catch (err) {
        alert(err.message?.data?.error);
      }
    };
    fetchCourts();
  }, []);

  return (
    <div className="courts-container">
      {courts.map((court) => (
        <CourtCard
          key={court.id}
          court={court}
          onSelect={() => setSelectedCourt(court)}
        />
      ))}
      {selectedCourt && (
        <BookCourtModal
          court={selectedCourt}
          onClose={() => setSelectedCourt(null)}
        />
      )}
    </div>
  );
}

export default CourtsSection;
