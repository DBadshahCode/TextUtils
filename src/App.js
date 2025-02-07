import React from 'react';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import RichTextEditor from './components/RichTextEditor';

function App() {
  return (
    <div>
      <Navbar title="Textify" />
      <RichTextEditor />
      <TextEditor heading="Unleash Your Creativity: Input Your Text!" />
    </div>
  );
}

export default App;
