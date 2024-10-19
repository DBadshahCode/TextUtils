import React from 'react';

const TextArea = ({ text, handleTextChange, fontSize, textColor }) => {

  return (
    <textarea
      className={`form-control bg-light`}
      value={text}
      onChange={handleTextChange}
      id="myBox"
      rows=""
      placeholder="Start typing to transform your text..."
      style={{
        fontSize: `${fontSize}px`,
        color: textColor,
        height: "300px",
        resize: "none",
      }}
    />
  );
};

export default TextArea;
