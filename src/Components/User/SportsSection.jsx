import SportCard from "./SportCard.jsx";
import "./css/SportsSection.css"
import { useState, useEffect } from "react";
import api from "../../api/axios";
function SportsSection() {
  const [sports, setSports] = useState([]);
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const fetchedSports = await api.get("/user/sports");
        setSports(fetchedSports.data);
      } catch (err) {
        alert(err.message?.data?.error);
      }
    };
    fetchSports();
  }, []);
  return (
    <div className="sports-container">
      {sports.map((sport) => (
        <SportCard key={sport.id} sport={sport}/>
      ))}
    </div>
  );
}

export default SportsSection;
