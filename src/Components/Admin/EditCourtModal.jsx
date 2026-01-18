import "./css/EditCourtCard.css";
import api from "../../api/axios";
import { useState } from "react";
function EditCourtModal({ court, onClose, onCourtUpdated }) {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [newPrice, setNewPrice] = useState(court.price);
  const handleEditCourt = async (e) => {
    e.preventDefault();
    try {
      const updatedCourt = await api.patch(
        `/admin/courts/${court.id}`,
        { price: Number(newPrice) },
        {
          headers: {
            "Content-Type": "application/json",
            "x-role": storedUser.role,
          },
        }
      );
      onCourtUpdated(updatedCourt.data)
      onClose();
      alert("Court updated successfully");
    } catch (err) {
      alert(err.message?.data?.error);
    }
  };

  const handleDisableCourt = async () => {
    try {
      await api.patch(
        `/admin/courts/${court.id}/disable`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "x-role": storedUser.role,
          },
        }
      );
      alert("Court disabled successfully");
      onClose();
      window.location.reload();
    } catch (err) {
      alert(err.message?.data?.error);
    }
  };

  const handleEnableCourt = async()=>{
    try{
    await api.patch(`/admin/courts/${court.id}/enable`, {}, {
      headers:
      {
      "Content-Type": "application/json",
      "x-role": storedUser.role,
      }
    })
    alert("Court enabled successfully");
    onClose();
    window.location.reload();
  } catch(err){
    alert(err.message?.data?.error)
  }
  }
  return (
    <div className="manage-court-container">
      <i onClick={onClose} className="fa-solid fa-delete-left"></i>
      <img src={court.image_url} alt="" />
      <p>
        Court {court.number} - {court.court_type}
      </p>
      <div className="form-section">
        <form onSubmit={handleEditCourt}>
          <div className="input-wrapper">
            <label htmlFor="">Court price</label>
            <div className="price-field">
              <input
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="price-input"
                type="number"
                min={0}
              />
              <span className="price-suffix">JOD / HOUR</span>
            </div>
          </div>

          <button type="submit" className="save-btn">
            Save Changes
          </button>
          {court.is_disabled ? (
            <button
              type="button"
              onClick={handleEnableCourt}
              className="enable-btn"
            >
              Enable
            </button>
          ) : (
            <button
              type="button"
              onClick={handleDisableCourt}
              className="disable-btn"
            >
              Disable Court
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default EditCourtModal;
