import React, { useState } from 'react';
import ColorRenderer from './ColorRenderer';
 ColorRenderer = () => {
  const [selectedColor, setSelectedColor] = useState('#FF5733'); 

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>Simple Color Renderer</h1>
      <div style={{ backgroundColor: selectedColor, width: '100px', height: '100px' }}></div>
      <input type="color" value={selectedColor} onChange={(e) => handleColorChange(e.target.value)} />
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorRenderer;