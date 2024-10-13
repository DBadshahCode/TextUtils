import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    document.body.style.backgroundColor = mode === 'dark' ? '#fff' : '#292a2d';
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
