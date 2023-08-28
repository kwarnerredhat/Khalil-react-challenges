import React from 'react';
import { useColor } from '../context/ColorContext';

const PixelArtGrid = ({ rows, cols }) => {
  const { drawingColor } = useColor();

  const handlePixelClick = (event, row, col) => {
    event.target.style.backgroundColor = drawingColor;
  };

  const grid = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push(
        <div
          key={`${i}-${j}`}
          className="pixel"
          onClick={(e) => handlePixelClick(e, i, j)}
        ></div>
      );
    }
  }

  return <div className="pixel-grid">{grid}</div>;
};

export default PixelArtGrid;
