import React from 'react';
import './FontSizeAndColor.css';

const FontSizeAndColor = ({ fontSize, setFontSize, textColor, setTextColor, maxLength, setMaxLength }) => {
  return (
    <div className="my-2">
      <label htmlFor="maxLength" className="text-dark">
        Max Characters:
      </label>
      <input
        type="number"
        id="maxLength"
        value={maxLength}
        onChange={(e) => setMaxLength(e.target.value)}
        min="1"
        className="mx-2"
      />

      <label htmlFor="fontSize" className="text-dark">
        Font Size:
      </label>
      <input
        type="range"
        id="fontSize"
        min="10"
        max="50"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        className="mx-2"
      />
      <span className="text-dark">{fontSize}px</span>

      <label htmlFor="textColor" className="mx-2 text-dark">
        Text Color:
      </label>
      <div className="color-picker-container">
        <input
          type="color"
          id="textColor"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="mx-2 color-picker"
        />
      </div>
    </div>
  );
};

export default FontSizeAndColor;
