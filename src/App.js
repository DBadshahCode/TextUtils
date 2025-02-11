import React from 'react';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import RichTextEditor from './components/RichTextEditor';

function App() {
  return (
    <div>
      <Navbar title="Textify" />
      {/* <RichTextEditor heading="Unleash Your Creativity: Input Your Text!"  /> */}
      <TextEditor heading="Unleash Your Creativity: Input Your Text!" />
    </div>
  );
}

export default App;
