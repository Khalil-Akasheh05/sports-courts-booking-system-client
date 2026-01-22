import "./css/AddSportModal.css";
import { useState } from "react";
import api from "../../api/axios";
function AddSportModal({ onClose }) {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [newSport, setNewSport] = useState({
    name: "",
    image_url: "",
  });
  const handleAddSport = async (e) => {
    e.preventDefault();
    try {
      await api.post("/admin/sports", newSport, {
        headers: {
          "x-role": storedUser.role,
        },
      });
      onClose();
      alert("Sport added successfully");
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add sport. Please try again.");
    }
  };
  return (
    <div className="add-sport-container">
      <i onClick={onClose} className="fa-solid fa-delete-left"></i>
      <div className="add-sport-form-section">
        <p>Add New Sport</p>
        <form onSubmit={handleAddSport} action="">
          <div className="add-sport-input-wrapper">
            <label htmlFor="">Sport Name</label>
            <input
              value={newSport.name}
              onChange={(e) =>
                setNewSport({ ...newSport, name: e.target.value })
              }
              type="text"
              required
            />
          </div>
          <div className="add-sport-input-wrapper">
            <label htmlFor="">Sport Image (URL)</label>
            <input
              value={newSport.image_url}
              onChange={(e) =>
                setNewSport({ ...newSport, image_url: e.target.value })
              }
              type="url"
              required
            />
          </div>
          <button type="submit">Add Sport</button>
        </form>
      </div>
    </div>
  );
}

export default AddSportModal;
