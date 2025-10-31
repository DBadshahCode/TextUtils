import React from "react";

const FindAndReplace = ({
  findText,
  replaceText,
  withText,
  setFindText,
  setReplaceText,
  setWithText,
  handleReplaceText,
  text,
}) => {
  const isDisabled = text.length === 0 || !replaceText;

  const inputStyle =
    "flex-1 min-w-[180px] px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200";

  const buttonStyle =
    "p-3 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-4 px-2">
      <input
        type="text"
        placeholder="Find"
        value={findText}
        onChange={(e) => setFindText(e.target.value)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="Replace"
        value={replaceText}
        onChange={(e) => setReplaceText(e.target.value)}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder="With"
        value={withText}
        onChange={(e) => setWithText(e.target.value)}
        className={inputStyle}
      />

      <button
        className={buttonStyle}
        onClick={handleReplaceText}
        disabled={isDisabled}
        title="Replace Text"
        aria-label="Replace Text"
      >
        <i className="fas fa-sync-alt text-lg" />
      </button>
    </div>
  );
};

export default FindAndReplace;
