import React, { useState } from 'react';
import ColorOption from './ColorOption';

const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); 

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <div style={{ backgroundColor, minHeight: '100vh', transition: 'background-color 0.3s' }}>
        <p>Click a color to change the background:</p>
        <ColorOption color="#FF0000" onClick={handleColorChange} />
        <ColorOption color="#00FF00" onClick={handleColorChange} />
        <ColorOption color="#0000FF" onClick={handleColorChange} />
        <ColorOption color="#FFFF00" onClick={handleColorChange} />
        <ColorOption color="#00FFFF" onClick={handleColorChange} />
      </div>
    </div>
  );
};

export default ColorPicker;