import React from "react";

const UndoRedoDownload = ({ handleUndo, handleRedo, downloadText, historyIndex, history }) => {
  const isUndoDisabled = historyIndex <= 0;
  const isRedoDisabled = historyIndex >= history.length - 1;
  const isDownloadDisabled = history.length === 0;

  const iconBtn = (icon, action, disabled, title) => (
    <button onClick={action} disabled={disabled} title={title}
      className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
      style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: disabled ? "not-allowed" : "pointer" }}>
      <i className={`fas ${icon} text-xs`} />
    </button>
  );

  return (
    <div className="flex items-center gap-1">
      {iconBtn("fa-rotate-left", handleUndo, isUndoDisabled, "Undo")}
      {iconBtn("fa-rotate-right", handleRedo, isRedoDisabled, "Redo")}
      <button onClick={downloadText} disabled={isDownloadDisabled} title="Download"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ background: "var(--accent)", color: "white", border: "none", cursor: isDownloadDisabled ? "not-allowed" : "pointer" }}>
        <i className="fas fa-download text-xs" />
        <span>Save</span>
      </button>
    </div>
  );
};

export default UndoRedoDownload;
