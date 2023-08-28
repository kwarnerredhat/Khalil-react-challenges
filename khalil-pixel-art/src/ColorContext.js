import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [drawingColor, setDrawingColor] = useState('#000000');

  return (
    <ColorContext.Provider value={{ drawingColor, setDrawingColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  return useContext(ColorContext);
}