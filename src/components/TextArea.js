import React from 'react';

const TextArea = ({ text, handleTextChange, fontSize, textColor, mode }) => {
  return (
    <textarea
      className="form-control"
      value={text}
      onChange={handleTextChange}
      id="myBox"
      rows="15"
      placeholder="Start typing to transform your text..."
      style={{
        fontSize: `${fontSize}px`,
        color: textColor,
        backgroundColor: mode === "dark" ? "#292a2d" : "#fff",
        height: "300px",
        resize: "none",
      }}
    />
  );
};

export default TextArea;
