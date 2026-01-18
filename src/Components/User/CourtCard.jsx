import "./css/CourtCard.css";
function CourtCard({ court, onSelect, onBook }) {
  return (
    <div className="court-card">
      <img src={court.image_url} alt="" />
      <p className="court-number">
        Court {court.number} - {court.court_type}
      </p>
      <p className="court-price">
        <span className="price-amount">{court.price}</span>
        <span className="price-meta">JOD / hour</span>
      </p>
      {<button onClick={onSelect}>Book Court</button>}
    </div>
  );
}

export default CourtCard;
