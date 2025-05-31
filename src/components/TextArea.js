import React from 'react';

const TextArea = ({ text, handleTextChange, fontSize, textColor }) => {
  return (
    <textarea
      value={text}
      onChange={handleTextChange}
      id="myBox"
      placeholder="Start typing to transform your text..."
      style={{
        fontSize: `${fontSize}px`,
        color: textColor,
        height: "300px",
        resize: "none",
        width: "100%",
      }}
      className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default TextArea;
