import ChooseSportModal from "./ChooseSportModal";
import AddCourtModal from "./AddCourtModal";
import AddSportModal from "./AddSportModal";
import { useState } from "react";
import "./css/QuickActions.css";
function QuickActions() {
  const [showChooseSport, setShowChooseSport] = useState(false);
  const [showAddCourt, setShowAddCourt] = useState(false);
  const [showAddSport, setShowAddSport] = useState(false);
  const [selectedSportId, setSelectedSportId] = useState();
  return (
    <>
      <aside className="quick-actions">
        <h2>Quick Actions</h2>
        <button onClick={() => setShowAddSport(true)}>Add New Sport</button>
        <button onClick={() => setShowChooseSport(true)}>Add New Court</button>
      </aside>
      {showChooseSport && (
        <ChooseSportModal
          onClose={() => setShowChooseSport(false)}
          onAddCourt={() => {
            setShowChooseSport(false);
            setShowAddCourt(true);
          }}
          onSelect={setSelectedSportId}
        />
      )}
      {showAddCourt && (
        <AddCourtModal id={selectedSportId} onClose={() => setShowAddCourt(false)} />
      )}
      {showAddSport && <AddSportModal onClose={() => setShowAddSport(false)} />}
    </>
  );
}

export default QuickActions;
