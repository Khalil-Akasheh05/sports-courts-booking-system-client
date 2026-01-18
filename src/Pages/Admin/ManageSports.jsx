import SportsSection from "../../Components/Admin/SportsSection";
import "./css/ManageSports.css";
import {useState} from "react"
import AddSportModal from "../../Components/Admin/AddSportModal";
function ManageSports() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="manage-sports-page">
      <div className="manage-sports-header">
        <h1>Manage Sports</h1>
        <button
          className="add-new-sport-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Add New Sport
        </button>
      </div>
      <SportsSection />
         {isModalOpen && (
        <AddSportModal onClose={()=>setIsModalOpen(false)}/>
      )}
    </div>
  );
}

export default ManageSports;
