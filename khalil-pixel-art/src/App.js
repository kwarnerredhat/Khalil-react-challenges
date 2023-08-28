import React from 'react';
import './App.css';
import { ColorProvider } from './context/ColorContext';
import ColorPicker from './components/ColorPicker';
import PixelArtGrid from './components/PixelArtGrid';

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <ColorPicker />
        <PixelArtGrid rows={10} cols={10} />
      </div>
    </ColorProvider>
  );
}

export default App;
