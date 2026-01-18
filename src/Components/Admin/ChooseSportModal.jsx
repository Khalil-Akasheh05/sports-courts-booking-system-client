import { useState } from "react";
import AddCourt from "./AddCourtModal";
import "./css/ChooseSportCard.css";
import { useEffect } from "react";
import api from "../../api/axios";
function ChooseSportModal({ onClose, onAddCourt, onSelect }) {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [sports, setSports] = useState([]);
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const fetchedSports = await api.get("/admin/sports", {
          headers: {
            "x-role": storedUser.role,
          },
        });
        setSports(fetchedSports.data);
      } catch (err) {
        alert(err.message?.data?.error);
      }
    };
    fetchSports();
  }, []);
  return (
    <div className="choose-sport-container">
      <i onClick={onClose} className="fa-solid fa-delete-left"></i>
      <p>Select Sport</p>
      <div className="form-section">
        <form action="">
          <div className="input-wrapper">
            <label htmlFor="">Select a sport</label>
            <select
              onChange={(e) => onSelect(Number(e.target.value))}
              className="sports-dropdown"
              name=""
              id=""
              required
            >
              <option value="">None</option>
              {sports.map((sport) => (
                <option key={sport.id} value={sport.id}>
                  {sport.name}
                </option>
              ))}
            </select>
          </div>
          <button type="button" onClick={onAddCourt}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChooseSportModal;
