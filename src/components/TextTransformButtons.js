import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TextTransformButtons = ({ text, transformText }) => {
  const buttonConfig = {
    upper: { icon: "fa-arrow-up-a-z", title: "Convert to Uppercase" },
    lower: { icon: "fa-arrow-down-a-z", title: "Convert to Lowercase" },
    title: { icon: "fa-heading", title: "Convert to Title Case" },
    sentence: { icon: "fa-align-left", title: "Convert to Sentence Case" },
    reverse: { icon: "fa-arrows-rotate", title: "Reverse Text" },
  };

  const isDisabled = text.length === 0;

  return (
    <div
      role="group"
      aria-label="Text transformation buttons"
      className="flex flex-wrap gap-2 my-3 justify-center"
    >
      {Object.entries(buttonConfig).map(([type, { icon, title }]) => (
        <button
          key={type}
          onClick={() => transformText(type)}
          disabled={isDisabled}
          title={title}
          className={`p-3 rounded-xl border border-gray-200 dark:border-gray-700
          bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm
          text-gray-800 dark:text-gray-100 shadow-sm
          hover:shadow-md hover:scale-105 active:scale-95
          transition-all duration-300 ease-in-out
          disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <i className={`fas ${icon} text-blue-500 text-lg`} />
        </button>
      ))}
    </div>
  );
};

export default TextTransformButtons;
