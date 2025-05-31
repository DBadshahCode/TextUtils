const FontSizeAndColor = ({ fontSize, setFontSize, textColor, setTextColor, maxLength, setMaxLength }) => {
  return (
    <div className="my-2 flex flex-wrap items-center gap-2 text-gray-800 dark:text-gray-100">
      <label htmlFor="maxLength">Max Characters:</label>
      <input
        type="number"
        id="maxLength"
        value={maxLength}
        onChange={(e) => setMaxLength(e.target.value)}
        min="1"
        className="w-20 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />

      <label htmlFor="fontSize">Font Size:</label>
      <input
        type="range"
        id="fontSize"
        min="10"
        max="50"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        className="accent-blue-500"
      />
      <span>{fontSize}px</span>

      <label htmlFor="textColor" className="ml-2">Text Color:</label>
      <input
        type="color"
        id="textColor"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
        className="w-6 h-6 rounded-full border-none cursor-pointer shadow-md p-0"
      />
    </div>
  );
};

export default FontSizeAndColor;
