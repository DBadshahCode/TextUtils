import React from "react";

const TextArea = ({ text, handleTextChange, fontSize, textColor }) => {
  return (
    <div className="relative my-4">
      <textarea
        id="myBox"
        value={text}
        onChange={handleTextChange}
        placeholder="Start typing to transform your text..."
        style={{
          fontSize: `${fontSize}px`,
          color: textColor,
        }}
        className="w-full h-[300px] p-4 rounded-2xl border border-gray-200 dark:border-gray-700
        bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-sm
        text-gray-900 dark:text-gray-100 resize-none transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg
        placeholder-gray-400 dark:placeholder-gray-500"
      />

      {/* Subtle gradient overlay for aesthetic depth */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-gray-100/10 dark:to-gray-900/10" />
    </div>
  );
};

export default TextArea;
