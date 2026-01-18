import CourtsSection from "../../Components/Admin/CourtsSection";
import "./css/ManageCourts.css";
import AddCourtModal from "../../Components/Admin/AddCourtModal";
import { useState } from "react";
function ManageCourts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="manage-courts-page">
      <header className="manage-courts-header">
        <h1>Manage Courts</h1>
        <button
          className="add-new-court-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Add New Court
        </button>
      </header>
      <CourtsSection />
      {isModalOpen && <AddCourtModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default ManageCourts;
