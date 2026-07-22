import React from "react";
import { Undo2, Redo2, Download } from "lucide-react";
import Tooltip from "./Tooltip";

const UndoRedoDownload = ({ handleUndo, handleRedo, downloadText, historyIndex, history }) => {
  const isUndoDisabled = historyIndex <= 0;
  const isRedoDisabled = historyIndex >= history.length - 1;
  const isDownloadDisabled = history.length === 0;

  const IconButton = ({ Icon, action, disabled, title }) => (
    <Tooltip label={title}>
      <button
        onClick={action}
        disabled={disabled}
        aria-label={title}
        className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent border-none text-secondary cursor-pointer transition-all duration-200 hover:scale-110 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <Icon size={14} />
      </button>
    </Tooltip>
  );

  return (
    <div className="flex items-center gap-1">
      <IconButton Icon={Undo2} action={handleUndo} disabled={isUndoDisabled} title="Undo" />
      <IconButton Icon={Redo2} action={handleRedo} disabled={isRedoDisabled} title="Redo" />
      <button
        onClick={downloadText}
        disabled={isDownloadDisabled}
        title="Download"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-accent text-white border-none cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Download size={14} />
        <span>Save</span>
      </button>
    </div>
  );
};

export default UndoRedoDownload;
