const ClipboardAndClear = ({ text, copyToClipboard, clearText, clearFormatting, handleRemoveExtraSpaces }) => {
  const isDisabled = text.length === 0;

  return (
    <div role="group" className="flex space-x-2 my-2 mx-2">
      <button
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={copyToClipboard}
        disabled={isDisabled}
        aria-label="Copy Text"
        title="Copy Text"
      >
        <i className="fa fa-clipboard" />
      </button>
      <button
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={clearText}
        disabled={isDisabled}
        aria-label="Clear Text"
        title="Clear Text"
      >
        <i className="fa fa-trash" />
      </button>
      <button
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={clearFormatting}
        disabled={isDisabled}
        aria-label="Clear Formatting"
        title="Clear Formatting"
      >
        <i className="fa fa-ban" />
      </button>
      <button
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={handleRemoveExtraSpaces}
        disabled={isDisabled}
        aria-label="Remove Extra Spaces"
        title="Remove Extra Spaces"
      >
        <i className="fa fa-eraser" />
      </button>
    </div>
  );
};

export default ClipboardAndClear;
