import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [totalIncrements, setTotalIncrements] = useState(0);

  const handleIncrement = () => {
    setTotalIncrements(totalIncrements + 1);
  };

  return (
    <div>
      <h1>Total Increments: {totalIncrements}</h1>
      <Counter onIncrement={handleIncrement} />
      <Counter onIncrement={handleIncrement} />
    </div>
  );
}

export default App;
