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

  const inputClasses =
    "w-1/4 mx-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const buttonClasses =
    "p-2 rounded-md border mx-1 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="my-2 flex flex-wrap items-end">
      <input
        type="text"
        placeholder="Find"
        value={findText}
        onChange={(e) => setFindText(e.target.value)}
        className={inputClasses}
      />
      <input
        type="text"
        placeholder="Replace"
        value={replaceText}
        onChange={(e) => setReplaceText(e.target.value)}
        className={inputClasses}
      />
      <input
        type="text"
        placeholder="With"
        value={withText}
        onChange={(e) => setWithText(e.target.value)}
        className={inputClasses}
      />
      <button
        className={buttonClasses}
        onClick={handleReplaceText}
        disabled={isDisabled}
      >
        <i className="fas fa-sync-alt" title="Replace Text" />
      </button>
    </div>
  );
};

export default FindAndReplace;
