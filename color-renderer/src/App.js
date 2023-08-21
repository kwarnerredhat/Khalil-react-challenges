import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#FFFFFF');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Renderer</h1>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        <div
          className="color-box"
          style={{ backgroundColor: color }}
        ></div>
        <p>Selected Color: {color}</p>
      </header>
    </div>
  );
}

export default App;
