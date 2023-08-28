import React from 'react';
import { useColor } from '../context/ColorContext';

const ColorPicker = () => {
  const { drawingColor, setDrawingColor } = useColor();

  const handleColorClick = (color) => {
    setDrawingColor(color);
  };

  return (
    <div className="color-picker">
      <div
        className="color-option"
        style={{ backgroundColor: '#000000' }}
        onClick={() => handleColorClick('#000000')}
      ></div>
      <div
        className="color-option"
        style={{ backgroundColor: '#FF0000' }}
        onClick={() => handleColorClick('#FF0000')}
      ></div>
      <div
        className="color-option"
        style={{ backgroundColor: '#00FF00' }}
        onClick={() => handleColorClick('#00FF00')}
      ></div>
      <div
        className="color-option"
        style={{ backgroundColor: '#0000FF' }}
        onClick={() => handleColorClick('#0000FF')}
      ></div>
    </div>
  );
};

export default ColorPicker;
