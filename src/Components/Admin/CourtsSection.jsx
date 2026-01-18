import CourtCard from "./CourtCard";
import "./css/CourtsSection.css";
import { useEffect, useState } from "react";
import EditCourtModal from "./EditCourtModal";
import { useParams } from "react-router";
import api from "../../api/axios";
function CourtsSection() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const { sportId } = useParams();
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [courts, setCourts] = useState([]);
  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const fetchedCourts = await api.get(`/admin/courts/${sportId}`, {
          headers: {
            "x-role": storedUser.role,
          },
        });
        setCourts(fetchedCourts.data);
      } catch (err) {
        alert(err.response?.data?.error);
      }
    };
    fetchCourts();
  }, [sportId]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/courts/${id}`, {
        headers: {
          "x-role": storedUser.role,
        },
      });
      setCourts((prev) => prev.filter((c) => c.id !== id));
      alert("Court deleted successfully")
    } catch (err) {
      alert(err.message?.data?.error);
    }
  };
  const handleCourtUpdated = (updatedCourt) => {
  setCourts((prev) =>
    prev.map((c) => (c.id === updatedCourt.id ? updatedCourt : c))
  );
  setSelectedCourt(updatedCourt);
};
  return (
    <div className="manage-courts-container">
      {courts.map((court) => (
        <CourtCard
          key={court.id}
          court={court}
          onDelete={() => handleDelete(court.id)}
          onSelect={() => setSelectedCourt(court)}
        />
      ))}
      {selectedCourt && (
        <EditCourtModal
          court={selectedCourt}
          onClose={() => setSelectedCourt(null)}
          onCourtUpdated={(handleCourtUpdated)}
        />
      )}
    </div>
  );
}

export default CourtsSection;
