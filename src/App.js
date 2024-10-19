import React from 'react';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div>
      <Navbar title="Textify" />
      <TextEditor heading="Unleash Your Creativity: Input Your Text!" />
    </div>
  );
}

export default App;
