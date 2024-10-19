import React from 'react';

const Preview = ({ renderedText }) => {

  return (
    <div className="container my-3">
      <h4 className={`text-dark`}>Preview</h4>
      <div
        className={`form-control bg-light text-dark`}
        style={{
          minHeight: '100px',
          overflowY: 'auto',
          padding: '10px',
        }}
      >
        {renderedText}
      </div>
    </div>
  );
};

export default Preview;
