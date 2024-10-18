import React from 'react';

const UndoRedoDownload = ({ handleUndo, handleRedo, downloadText, historyIndex, history }) => {
  return (
    <div className="btn-group my-2 mx-2" role="group">
      <button className="btn btn-light" onClick={handleUndo} disabled={historyIndex <= 0}>
        Undo
      </button>
      <button className="btn btn-light" onClick={handleRedo} disabled={historyIndex >= history.length - 1}>
        Redo
      </button>
      <button className="btn btn-light" onClick={downloadText} disabled={historyIndex >= history.length - 1}>
        Download
      </button>
    </div>
  );
};

export default UndoRedoDownload;
