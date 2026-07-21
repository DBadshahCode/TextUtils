import React from "react";

const TextArea = ({ text, handleTextChange, fontSize, textColor }) => {
  return (
    <textarea
      id="myBox"
      value={text}
      onChange={handleTextChange}
      placeholder="Start typing here..."
      style={{ fontSize: `${fontSize}px`, color: textColor }}
      className="w-full h-72 p-5 resize-none bg-input focus:outline-none placeholder-muted leading-relaxed font-mono"
    />
  );
};

export default TextArea;
