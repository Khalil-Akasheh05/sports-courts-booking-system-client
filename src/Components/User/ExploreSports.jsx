import "./css/ExploreSports.css";
import { useEffect, useState } from "react";
import api from "../../../api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ExploreSports() {
  const navigate = useNavigate();
  const [sports, setSports] = useState([]);
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const fetchedSports = await api.get("/user/explore-sports");
        setSports(fetchedSports.data);
      } catch (err) {
        alert(err.response?.data?.message);
      }
    };
    fetchSports();
  }, []);
  return (
    <div className="explore-section">
      <h2>Explore Our sports</h2>
      <div className="explore-sports-container">
        {sports.map((sport) => (
          <div
            key={sport.id}
            className="sport-container"
            onClick={() => navigate(`/courts/${sport.id}`)}
          >
            <img src={sport.image_url} alt="" />
            <h5>{sport.name}</h5>
          </div>
        ))}
        <div className="view-all-container">
          <Link to="/sports">
            <i class="fa-solid fa-arrow-right"></i>
            <p>View All</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreSports;
