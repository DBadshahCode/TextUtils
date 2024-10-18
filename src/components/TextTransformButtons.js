import React from 'react';

const TextTransformButtons = ({ text, transformText }) => {
  return (
    <div className="btn-group my-3 mx-2" role="group">
      {['upper', 'lower', 'title', 'sentence', 'reverse'].map((type) => (
        <button
          key={type}
          className="btn btn-light"
          onClick={() => transformText(type)}
          disabled={text.length === 0}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} Case
        </button>
      ))}
    </div>
  );
};

export default TextTransformButtons;
