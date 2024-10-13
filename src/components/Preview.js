import React from 'react';

const Preview = ({ renderedText, mode }) => {
  return (
    <div className="container my-3">
      <h4>Preview</h4>
      <div
        className="form-control"
        style={{
          backgroundColor: mode === "dark" ? "#292a2d" : "#fff",
          color: mode === "dark" ? "#fff" : "#000",
          minHeight: "100px",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {renderedText}
      </div>
    </div>
  );
};

export default Preview;
