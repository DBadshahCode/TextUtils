import React, { useState } from "react";

export default function TextForm(props) {
  // To Upper Case
  const handleUcClick = () => {
    // console.log("UpperCase was Clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
  };

  // To Lower Case
  const handleLcClick = () => {
    // console.log("LowerCase was Clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success");
  };

  // To Copy Text
  const handleCopyClick = () => {
    // console.log("Copy was Clicked");
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handleClrClick = () => {
    // console.log("Clear was Clicked");
    setText("");
    props.showAlert("All Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("");

  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "#fff" : "#000" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter Your Text Here..."
          style={{
            backgroundColor: props.mode === "dark" ? "#292a2d" : "#fff",
            color: props.mode === "dark" ? "#fff" : "#000",
          }}
        ></textarea>
      </div>
      <span>
        {
          text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length
        }{" "}
        Words, {text.length} Characters
      </span>
      <button className="btn btn-success mx-2" onClick={handleUcClick} disabled={text.length === 0}>
        Upper Case
      </button>
      <button className="btn btn-success mx-2" onClick={handleLcClick} disabled={text.length === 0}>
        Lower Case
      </button>
      <button className="btn btn-success mx-2" onClick={handleCopyClick} disabled={text.length === 0}>
        Copy
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClrClick} disabled={text.length === 0}>
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
          style={{
            backgroundColor: props.mode === "dark" ? "#292a2d" : "#fff",
            color: props.mode === "dark" ? "#fff" : "#000",
          }}
        ></textarea>
      </div>
    </div>
  );
}
