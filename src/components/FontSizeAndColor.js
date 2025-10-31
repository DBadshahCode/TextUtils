import React from "react";

const FontSizeAndColor = ({
  fontSize,
  setFontSize,
  textColor,
  setTextColor,
  maxLength,
  setMaxLength,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-4 px-3 py-3 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-sm text-gray-800 dark:text-gray-100 transition-all duration-200">
      
      {/* Max Length */}
      <div className="flex items-center gap-2">
        <label htmlFor="maxLength" className="font-medium text-sm">
          Max Characters:
        </label>
        <input
          type="number"
          id="maxLength"
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value)}
          min="1"
          className="w-24 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Font Size */}
      <div className="flex items-center gap-2">
        <label htmlFor="fontSize" className="font-medium text-sm">
          Font Size:
        </label>
        <input
          type="range"
          id="fontSize"
          min="10"
          max="50"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="w-32 accent-blue-500 cursor-pointer"
        />
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {fontSize}px
        </span>
      </div>

      {/* Text Color */}
      <div className="flex items-center gap-2">
        <label htmlFor="textColor" className="font-medium text-sm">
          Text Color:
        </label>
        <input
          type="color"
          id="textColor"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="w-8 h-8 rounded-full border-none shadow-md cursor-pointer transition-transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default FontSizeAndColor;
