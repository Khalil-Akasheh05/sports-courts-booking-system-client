import "./css/SportCard.css"
import {useNavigate} from "react-router-dom"
function SportCard({sport}) {
  const navigate = useNavigate()
  return (
    <div className="sport-card">
      <img src={sport.image_url} alt={sport.name} />
      <p>{sport.name}</p>
      <button onClick={() => navigate(`/courts/${sport.id}`)}>View Courts</button>
    </div>
  );
}

export default SportCard;
