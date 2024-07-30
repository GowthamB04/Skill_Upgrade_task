import React, { useState } from 'react';
import './Heartbeat.css';
function Heartbeat() {
  const [isBeating, setIsBeating] = useState(false);

  const handleToggleBeat = () => {
    setIsBeating(!isBeating);
  };
  return (
    <div className="heart-container">
      <div className={`heart ${isBeating ? 'beating' : ''}`}></div>
      <button className="heartbeat-button" onClick={handleToggleBeat}>
        {isBeating ? 'Stop Heartbeat' : 'Start Heartbeat'}
      </button>
    </div>
  );
}
export default Heartbeat;
