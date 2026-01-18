import "./css/CourtCard.css";
function CourtCard({ court, onSelect, onDelete }) {
  return (
    <div className="court-card">
      {court.is_disabled && (
        <i
          className="fa-solid fa-ban disable-icon"
          title="Court is disabled"
        ></i>
      )}
      <img src={court.image_url} alt="" />
      <p>
        Court {court.number} - {court.court_type}
      </p>
      <p className="court-price">
        <span className="price-amount">{court.price}</span>
        <span className="price-meta">JOD / hour</span>
      </p>
      <div className="buttons-container">
        <button onClick={onSelect} className="edit-courts-btn">
          Edit Court
        </button>
        <button className="delete-courts-btn"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this court?")) {
              onDelete();
            }
          }}
        >
          Delete Court
        </button>
      </div>
    </div>
  );
}

export default CourtCard;
