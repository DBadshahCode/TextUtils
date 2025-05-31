const UndoRedoDownload = ({ handleUndo, handleRedo, downloadText, historyIndex, history }) => {
  return (
    <div role="group" className="flex space-x-2 my-2 mx-2">
      <button
        onClick={handleUndo}
        disabled={historyIndex <= 0}
        title="Undo"
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Undo"
      >
        <i className="fa fa-undo"></i>
      </button>

      <button
        onClick={handleRedo}
        disabled={historyIndex >= history.length - 1}
        title="Redo"
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Redo"
      >
        <i className="fa fa-redo"></i>
      </button>

      <button
        onClick={downloadText}
        disabled={history.length === 0}
        title="Download File"
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Download File"
      >
        <i className="fa fa-download"></i>
      </button>
    </div>
  );
};

export default UndoRedoDownload;
