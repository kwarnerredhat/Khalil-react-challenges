import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </header>
      <main>
        {'Welcome to my dark mode'}
      </main>
    </div>
  );
}

export default App;
