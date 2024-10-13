import React from 'react';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
        <Navbar title="Textify" />
        <TextEditor heading="Unleash Your Creativity: Input Your Text!" />
    </ThemeProvider>
  );
}

export default App;
