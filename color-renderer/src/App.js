import React, { useState } from 'react';

const ColorRenderer = () => {
  const [selectedColor, setSelectedColor] = useState('#FF5733'); 

  return (
    <div>
      <h1>Khalil Color Renderer</h1>
      <div style={{ backgroundColor: selectedColor, width: '100px', height: '100px' }}></div>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <p>Selected Color: {selectedColor}</p>

    </div>
  );
};

export default ColorRenderer;
