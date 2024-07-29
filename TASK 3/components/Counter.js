// src/components/Counter.js
import React, { useState } from 'react';

function Counter({ onIncrement }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    onIncrement();
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
