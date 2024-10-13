import React from 'react';

const FontSizeAndColor = ({ fontSize, setFontSize, textColor, setTextColor, maxLength, setMaxLength, mode }) => {
  return (
    <div className="my-2">
      <label htmlFor="fontSize">Font Size:</label>
      <input
        type="range"
        id="fontSize"
        min="10"
        max="50"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        className="mx-2"
      />
      <span>{fontSize}px</span>
      <label htmlFor="textColor" className="mx-2">Text Color:</label>
      <input
        type="color"
        id="textColor"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
        className="mx-2"
      />
      <label htmlFor="maxLength">Max Characters: </label>
      <input
        type="number"
        id="maxLength"
        value={maxLength}
        onChange={(e) => setMaxLength(e.target.value)}
        min="1"
        className="mx-2"
      />
    </div>
  );
};

export default FontSizeAndColor;
