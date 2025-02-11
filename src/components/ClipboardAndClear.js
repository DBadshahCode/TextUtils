import React from 'react';

const ClipboardAndClear = ({ text, copyToClipboard, clearText, clearFormatting, handleRemoveExtraSpaces }) => {

  return (
    <div className="btn-group my-2 mx-2" role="group">
      <button
        className={`btn btn-light`}
        onClick={copyToClipboard}
        disabled={text.length === 0}
      >
        <i className="fa fa-clipboard" title="Copy Text" />
      </button>
      <button
        className={`btn btn-light`}
        enterKeyHint="Clear"
        onClick={clearText}
        disabled={text.length === 0}
      >
        <i className="fa fa-trash" title="Clear Text" />
      </button>
      <button
        className={`btn btn-light`}
        onClick={clearFormatting}
        disabled={text.length === 0}
      >
        <i className="fa fa-remove-format" title="Clear Formatting" />
      </button>
      <button
        className={`btn btn-light`}
        onClick={handleRemoveExtraSpaces}
        disabled={text.length === 0}
      >
        <i className="fa fa-eraser" title="Remove Etra Spaces" />
      </button>
    </div>
  );
};

export default ClipboardAndClear;
