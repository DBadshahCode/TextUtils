import React from 'react';

const ClipboardAndClear = ({ text, copyToClipboard, clearText, clearFormatting, handleRemoveExtraSpaces }) => {

  return (
    <div className="btn-group my-2 mx-2" role="group">
      <button 
        className={`btn btn-light`} 
        onClick={copyToClipboard} 
        disabled={text.length === 0}
      >
        Copy
      </button>
      <button 
        className={`btn btn-light`} 
        onClick={clearText} 
        disabled={text.length === 0}
      >
        Clear
      </button>
      <button 
        className={`btn btn-light`} 
        onClick={clearFormatting} 
        disabled={text.length === 0}
      >
        Clear Formatting
      </button>
      <button 
        className={`btn btn-light`} 
        onClick={handleRemoveExtraSpaces} 
        disabled={text.length === 0}
      >
        Remove Extra Spaces
      </button>
    </div>
  );
};

export default ClipboardAndClear;
