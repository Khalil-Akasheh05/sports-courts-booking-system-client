import { useNavigate } from "react-router-dom";
import "./css/SportCard.css";
function SportCard({ sport, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="sport-card">
      <img src={sport.image_url} alt="" />
      <p>{sport.name}</p>
      <div className="buttons-container">
        <button
          onClick={() => navigate(`/manage-courts/${sport.id}`)}
          className="manage-courts-btn"
        >
          Manage Courts
        </button>
        <button
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to delete this sport along with its courts?"
              )
            ) {
              onDelete();
            }
          }}
          className="delete-sports-btn"
        >
          Delete Sport
        </button>
      </div>
    </div>
  );
}

export default SportCard;
