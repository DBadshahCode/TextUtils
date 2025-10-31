import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const UndoRedoDownload = ({
  handleUndo,
  handleRedo,
  downloadText,
  historyIndex,
  history,
}) => {
  const isUndoDisabled = historyIndex <= 0;
  const isRedoDisabled = historyIndex >= history.length - 1;
  const isDownloadDisabled = history.length === 0;

  const buttons = [
    { icon: "fa-rotate-left", action: handleUndo, title: "Undo", disabled: isUndoDisabled },
    { icon: "fa-rotate-right", action: handleRedo, title: "Redo", disabled: isRedoDisabled },
    { icon: "fa-download", action: downloadText, title: "Download File", disabled: isDownloadDisabled },
  ];

  return (
    <div
      role="group"
      className="flex flex-wrap gap-3 my-3 justify-center"
      aria-label="Undo, Redo and Download buttons"
    >
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={btn.action}
          disabled={btn.disabled}
          title={btn.title}
          aria-label={btn.title}
          className={`p-3 rounded-xl border border-gray-200 dark:border-gray-700
          bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm
          text-gray-800 dark:text-gray-100 shadow-sm
          hover:shadow-md hover:scale-105 active:scale-95
          transition-all duration-300 ease-in-out
          disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <i className={`fas ${btn.icon} text-blue-500 text-lg`} />
        </button>
      ))}
    </div>
  );
};

export default UndoRedoDownload;
