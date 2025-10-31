import React from "react";

const ClipboardAndClear = ({
  text,
  copyToClipboard,
  clearText,
  clearFormatting,
  handleRemoveExtraSpaces,
}) => {
  const isDisabled = text.length === 0;

  const buttonStyle =
    "flex items-center justify-center p-3 rounded-xl shadow-sm bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:shadow-md transition-all duration-200 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed";

  return (
    <div
      role="group"
      className="flex flex-wrap gap-3 justify-center mt-4 px-2"
    >
      <button
        className={buttonStyle}
        onClick={copyToClipboard}
        disabled={isDisabled}
        aria-label="Copy Text"
        title="Copy Text"
      >
        <i className="fas fa-copy text-blue-500 text-lg" />
      </button>

      <button
        className={buttonStyle}
        onClick={clearText}
        disabled={isDisabled}
        aria-label="Clear Text"
        title="Clear Text"
      >
        <i className="fas fa-trash text-red-500 text-lg" />
      </button>

      <button
        className={buttonStyle}
        onClick={clearFormatting}
        disabled={isDisabled}
        aria-label="Clear Formatting"
        title="Clear Formatting"
      >
        <i className="fas fa-eraser text-yellow-500 text-lg" />
      </button>

      <button
        className={buttonStyle}
        onClick={handleRemoveExtraSpaces}
        disabled={isDisabled}
        aria-label="Remove Extra Spaces"
        title="Remove Extra Spaces"
      >
        <i className="fas fa-compress-arrows-alt text-green-500 text-lg" />
      </button>
    </div>
  );
};

export default ClipboardAndClear;
