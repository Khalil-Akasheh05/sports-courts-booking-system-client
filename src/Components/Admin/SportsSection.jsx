import SportCard from "./SportCard";
import "./css/SportsSection.css";
import { useState, useEffect } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router";
function SportsSection() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [sports, setSports] = useState([]);
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const fetchedSports = await api.get("/admin/sports", {
          headers: { 
            "x-role": storedUser.role,
          },
        });
        setSports(fetchedSports.data);
      } catch (err) {
        alert(err.response?.data?.message || "Failed to load sports.");
        if(err.response?.status===403){
          navigate("/home");
        }
      }
    };
    fetchSports();
  }, []);

  const handleDelete=async(id)=>{
    try{
      await api.delete(`/admin/sports/${id}`, {
        headers:{
          "x-role": storedUser.role
        }
      })
      setSports((prevSports) => prevSports.filter((sport) => sport.id !== id));
      alert("Sport deleted successfully")
    } catch(err){
      alert(err.response?.data?.message || "Failed to delete sport. Please try again.")
    }
  }
  return (
    <div className="manage-sports-container">
      {sports.map((sport) => (
        <SportCard key={sport.id} sport={sport} onDelete={()=>handleDelete(sport.id)}/>
      ))}
    </div>
  );
}

export default SportsSection;
