// src/App.js
import React from 'react';
import './App.css'; // Import the CSS for styling the app
import Heartbeat from './components/Heartbeat'; // Import the Heartbeat component

function App() {
  return (
    <div className="app-container">
      <h1 className="heartbeat-title">HEARTBEAT ANIMATION</h1>
      <Heartbeat />
    </div>
  );
}

export default App;
