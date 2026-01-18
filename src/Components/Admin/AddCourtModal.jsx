import { useState } from "react";
import "./css/AddCourtModal.css";
import api from "../../api/axios";
import { useParams } from "react-router";
function AddCourtModal({id, onClose}) {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const {sportId} = useParams();
  const resolvedSportId = id ?? sportId
  const [newCourt, setNewCourt]=useState({
    number: "",
    court_type: "",
    price: "",
    image_url: "",
  })
  const handleAddNewCourt=async(e)=>{
    e.preventDefault();
    try{
      await api.post(`/admin/courts/${resolvedSportId}`, newCourt, {
        headers: {
          "Content-Type": "application/json",
          "x-role": storedUser.role,
        }
      })
      onClose();
      window.location.reload();
      alert("Court added successfully")
    } catch(err){
      alert(err.response?.data?.error)
    }
  }
  return (
    <div className="add-court-container">
      <i onClick={onClose} className="fa-solid fa-delete-left"></i>
      <div className="add-court-form-section">
        <p>Add New Court</p>
        <form onSubmit={handleAddNewCourt}>
          <div className="add-court-input-wrapper">
            <label htmlFor="">Court Number</label>
            <input value={newCourt.number} onChange={(e)=>setNewCourt({...newCourt, number: Number(e.target.value)})} type="number" required/>
          </div>
          <div className="add-court-input-wrapper">
            <label htmlFor="">Court Type</label>
            <select value={newCourt.court_type} onChange={(e)=>setNewCourt({...newCourt, court_type: e.target.value})} name="" id="" required>
              <option value="">None</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </div>
          <div className="add-court-input-wrapper">
            <label htmlFor="">Price</label>
            <div className="price-field">
            <input value={newCourt.price} onChange={(e)=>setNewCourt({...newCourt, price: Number(e.target.value)})} type="number" min={0} required/>
            <span className="price-suffix"> JOD / HOUR</span>
            </div>
          </div>
          <div className="add-court-input-wrapper">
            <label htmlFor="">Court Image (URL)</label>
            <input value={newCourt.image_url} onChange={(e)=>setNewCourt({...newCourt, image_url: e.target.value})} type="url" required/>
          </div>
          <button type="submit">Add Court</button>
        </form>
      </div>
    </div>
  );
}

export default AddCourtModal;
