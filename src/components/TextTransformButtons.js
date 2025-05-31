import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // icons

const TextTransformButtons = ({ text, transformText }) => {
  const buttonConfig = {
    upper: { icon: "fa-arrow-up", title: "Convert to Upper Case" },
    lower: { icon: "fa-arrow-down", title: "Convert to Lower Case" },
    title: { icon: "fa-text-height", title: "Convert to Title Case" },
    sentence: { icon: "fa-font", title: "Convert to Sentence Case" },
    reverse: { icon: "fa-exchange-alt", title: "Reverse Text" },
  };

  return (
    <div
      role="group"
      aria-label="Text transformation buttons"
      className="flex space-x-2 my-3 mx-2"
    >
      {Object.keys(buttonConfig).map((type) => (
        <button
          key={type}
          onClick={() => transformText(type)}
          disabled={text.length === 0}
          aria-label={buttonConfig[type].title}
          title={buttonConfig[type].title}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <i className={`fas ${buttonConfig[type].icon}`}></i>
        </button>
      ))}
    </div>
  );
};

export default TextTransformButtons;
