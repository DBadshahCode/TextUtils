import React from 'react';

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
  return (
    <div className="my-2 d-flex align-items-end">
      <input
        type="text"
        placeholder="Find"
        value={findText}
        onChange={(e) => setFindText(e.target.value)}
        className="form-control mx-1"
        style={{ width: '30%' }} // Adjust the width as needed
      />
      <input
        type="text"
        placeholder="Replace"
        value={replaceText}
        onChange={(e) => setReplaceText(e.target.value)}
        className="form-control mx-1"
        style={{ width: '30%' }} // Adjust the width as needed
      />
      <input
        type="text"
        placeholder="With"
        value={withText}
        onChange={(e) => setWithText(e.target.value)}
        className="form-control mx-1"
        style={{ width: '30%' }} // Adjust the width as needed
      />
      <button
        className="btn btn-light mx-1"
        onClick={handleReplaceText}
        disabled={text.length === 0 || !replaceText}
      >
        Replace
      </button>
    </div>
  );
};

export default FindAndReplace;
