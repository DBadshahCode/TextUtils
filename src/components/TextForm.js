import React, { useState } from "react";

export default function TextForm(props) {
  // To Upper Case
  const handleUcClick = () => {
    // console.log("UpperCase was Clicked");
    setText(text.toUpperCase());
  };

  // To Lower Case
  const handleLcClick = () => {
    // console.log("LowerCase was Clicked");
    setText(text.toLowerCase());
  };

  const handleClrClick = () => {
    // console.log("Clear was Clicked");
    setText("");
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("");

  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter Your Text Here..."
        ></textarea>
      </div>
      <span>
        {text.split(" ").length} Words, {text.length} Characters
      </span>
      <button className="btn btn-success mx-2" onClick={handleUcClick}>
        Upper Case
      </button>
      <button className="btn btn-success mx-2" onClick={handleLcClick}>
        Lower Case
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClrClick}>
        Clear
      </button>
      <div className="container my-3">
        <h4>Preview</h4>
        <textarea
          className="form-control"
          name="preview"
          id="preview"
          rows="5"
          value={text}
          disabled
        ></textarea>
      </div>
    </div>
  );
}
