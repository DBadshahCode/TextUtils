import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure icons are loaded

const TextTransformButtons = ({ text, transformText }) => {
  const buttonConfig = {
    upper: { icon: "fa-arrow-up", title: "Convert to Upper Case" },
    lower: { icon: "fa-arrow-down", title: "Convert to Lower Case" },
    title: { icon: "fa-text-height", title: "Convert to Title Case" },
    sentence: { icon: "fa-font", title: "Convert to Sentence Case" },
    reverse: { icon: "fa-exchange-alt", title: "Reverse Text" },
  };

  return (
    <div className="btn-group my-3 mx-2" role="group" aria-label="Text transformation buttons">
      {Object.keys(buttonConfig).map((type) => (
        <button
          key={type}
          className="btn btn-light"
          onClick={() => transformText(type)}
          disabled={text.length === 0}
          aria-label={buttonConfig[type].title} // Accessibility for screen readers
          title={buttonConfig[type].title}      // Tooltip on hover
        >
          <i className={`fas ${buttonConfig[type].icon}`}></i>
        </button>
      ))}
    </div>
  );
};

export default TextTransformButtons;
