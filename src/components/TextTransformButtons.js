import React from 'react';

const TextTransformButtons = ({ text, transformText }) => {

  const buttonLabels = {
    upper: "Upper Case",
    lower: "Lower Case",
    title: "Title Case",
    sentence: "Sentence Case",
    reverse: "Reverse Text",
  };

  return (
    <div className="btn-group my-3 mx-2" role="group" aria-label="Text transformation buttons">
      {Object.keys(buttonLabels).map((type) => (
        <button
          key={type}
          className={`btn btn-light`}
          onClick={() => transformText(type)}
          disabled={text.length === 0}
          aria-label={`Transform to ${buttonLabels[type]}`}
        >
          {buttonLabels[type]}
        </button>
      ))}
    </div>
  );
};

export default TextTransformButtons;
