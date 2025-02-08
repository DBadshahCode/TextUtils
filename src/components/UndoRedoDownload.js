import React from 'react';

const UndoRedoDownload = ({ handleUndo, handleRedo, downloadText, historyIndex, history }) => {

  return (
    <div className="btn-group my-2 mx-2" role="group">
      <button
        className={`btn btn-light`}
        onClick={handleUndo}
        disabled={historyIndex <= 0}
      >
        <i className="fa fa-undo" title="Undo" />
      </button>
      {/* <button
        className={`btn btn-light`}
        onClick={handleRedo}
        disabled={history.length === 0 || historyIndex >= history.length - 1}
      >
        Redo
      </button> */}
      <button
        className={`btn btn-light`}
        onClick={downloadText}
        disabled={history.length === 0}
      >
        <i className="fa fa-download" title="Download File" />
      </button>
    </div>
  );
};

export default UndoRedoDownload;
