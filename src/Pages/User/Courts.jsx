import CourtsSection from "../../Components/User/CourtsSection";
import "./css/Courts.css";
function Courts() {
  return (
    <div className="courts-page">
      <h1>Courts</h1>
      <p>Choose a Court to Book Your Time Slot</p>
      <CourtsSection />
    </div>
  );
}

export default Courts;
