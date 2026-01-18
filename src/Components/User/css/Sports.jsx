import SportsSection from "../../Components/User/SportsSection";
import "./css/Sports.css"
function Sports() {
  return (
    <div className="sports-page">
            <h1>Sports</h1>
            <p>Choose a Sport to View Available Courts</p>
            <SportsSection/>
    </div>
  )
}

export default Sports;
