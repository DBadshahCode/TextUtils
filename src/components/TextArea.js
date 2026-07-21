import React from "react";

const TextArea = ({ text, handleTextChange, fontSize, textColor }) => {
  return (
    <textarea
      id="myBox"
      value={text}
      onChange={handleTextChange}
      placeholder="Start typing here..."
      style={{
        fontSize: `${fontSize}px`,
        color: textColor,
        background: "var(--bg-input)",
        caretColor: "var(--accent)",
        fontFamily: "'DM Mono', monospace",
      }}
      className="w-full h-72 p-5 resize-none focus:outline-none placeholder-[var(--text-muted)] leading-relaxed"
    />
  );
};

export default TextArea;
