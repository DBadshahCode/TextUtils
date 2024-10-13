import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function TextEditor({ heading }) {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [textColor, setTextColor] = useState("#000000");
  const [replaceText, setReplaceText] = useState("");
  const [withText, setWithText] = useState("");
  const [findText, setFindText] = useState("");
  const [maxLength, setMaxLength] = useState(500);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const { mode } = useContext(ThemeContext);

  const updateText = (newText) => {
    setText(newText);
    setHistory((prev) => {
      const newHistory = prev.slice(0, historyIndex + 1);
      return [...newHistory, newText];
    });
    setHistoryIndex((prev) => prev + 1);
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      updateText(newText);
    } else {
      console.log("Character limit exceeded!");
    }
  };

  const handleReplaceText = () => {
    if (replaceText) {
      const newText = text.replace(new RegExp(replaceText, "g"), withText);
      updateText(newText);
    }
  };

  const handleRemoveExtraSpaces = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    updateText(newText);
  };

  const renderHighlightedText = () => {
    if (!findText) return text;

    const regex = new RegExp(`(${findText})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
  };

  const transformText = (transformType) => {
    let transformedText = "";
    switch (transformType) {
      case "upper":
        transformedText = text.toUpperCase();
        break;
      case "lower":
        transformedText = text.toLowerCase();
        break;
      case "title":
        transformedText = text
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        break;
      case "sentence":
        transformedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        break;
      case "reverse":
        transformedText = text.split("").reverse().join("");
        break;
      default:
        return;
    }
    updateText(transformedText);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const clearText = () => {
    updateText("");
  };

  const clearFormatting = () => {
    updateText(text.replace(/<\/?[^>]+(>|$)/g, ""));
    setFontSize(16);
    setTextColor("#000000");
  };

  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text.txt";
    link.click();
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
      setText(history[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1);
      setText(history[historyIndex + 1]);
    }
  };
  const calculateReadingTime = (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean); // Split by whitespace and filter out empty strings
    const wordCount = words.length;
    const readingSpeed = 200; // Average reading speed in words per minute
    return Math.ceil(wordCount / readingSpeed); // Return estimated reading time in minutes
  };
  
  // Use the function in your render method
  const readingTime = calculateReadingTime(text);  
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;

  return (
    <div
      className="container my-3"
      style={{ color: mode === "dark" ? "#fff" : "#000" }}
    >
      <h1 className="mb-3">{heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleTextChange}
          id="myBox"
          rows="15"
          placeholder="Type Below to Transform Your Text!"
          style={{
            fontSize: `${fontSize}px`,
            color: textColor,
            backgroundColor: mode === "dark" ? "#292a2d" : "#fff",
            height: "300px",
            resize: "none",
          }}
        />
      </div>
      <span>
        {text.split(/\s+/).filter((element) => element.length !== 0).length} Words, {text.length} Characters, {sentenceCount} Sentences, {paragraphCount} Paragraphs, Estimated Reading Time: {readingTime} min
      </span>

      {/* Grouped Buttons */}
      <div className="my-2">
        <div className="btn-group my-3 mx-2" role="group">
          <button className="btn btn-outline-primary" onClick={() => transformText("upper")} disabled={text.length === 0}>
            Upper Case
          </button>
          <button className="btn btn-outline-primary" onClick={() => transformText("lower")} disabled={text.length === 0}>
            Lower Case
          </button>
          <button className="btn btn-outline-primary" onClick={() => transformText("title")} disabled={text.length === 0}>
            Title Case
          </button>
          <button className="btn btn-outline-primary" onClick={() => transformText("sentence")} disabled={text.length === 0}>
            Sentence Case
          </button>
          <button className="btn btn-outline-primary" onClick={() => transformText("reverse")} disabled={text.length === 0}>
            Reverse Text
          </button>
        </div>

        <div className="btn-group my-2 mx-2" role="group">
          <button className="btn btn-outline-primary" onClick={copyToClipboard} disabled={text.length === 0}>
            Copy
          </button>
          <button className="btn btn-outline-primary" onClick={clearText} disabled={text.length === 0}>
            Clear
          </button>
          <button className="btn btn-outline-primary" onClick={clearFormatting} disabled={text.length === 0}>
            Clear Formatting
          </button>
          <button className="btn btn-outline-primary" onClick={handleRemoveExtraSpaces} disabled={text.length === 0}>
            Remove Extra Spaces
          </button>
        </div>

        <div className="my-2">
          <input
            type="text"
            placeholder="Text to find"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            className="form-control mx-2"
            style={{
              display: 'inline-block', width: 'auto', maxWidth: '150px',
              backgroundColor: mode === "dark" ? "#292a2d" : "#fff",
              color: mode === "dark" ? "#fff" : "#000"
            }} // Set width for inline
          />
          <input
            type="text"
            placeholder="Text to replace"
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
            className="form-control mx-2"
            style={{
              display: 'inline-block', width: 'auto', maxWidth: '150px',
              backgroundColor: mode === "dark" ? "#292a2d" : "#fff",
              color: mode === "dark" ? "#fff" : "#000"
            }} // Set width for inline
          />
          <input
            type="text"
            placeholder="Replace with"
            value={withText}
            onChange={(e) => setWithText(e.target.value)}
            className="form-control mx-2"
            style={{
              display: 'inline-block', width: 'auto', maxWidth: '150px',
              backgroundColor: mode === "dark" ? "#292a2d" : "#fff",
              color: mode === "dark" ? "#fff" : "#000"
            }} // Set width for inline
          />
          <button className="btn btn-outline-primary" onClick={handleReplaceText} disabled={text.length === 0 || !replaceText}>
            Replace
          </button>
        </div>

        <div className="btn-group my-2 mx-2" role="group">
          <button className="btn btn-outline-primary" onClick={handleUndo} disabled={historyIndex <= 0}>
            Undo
          </button>
          <button className="btn btn-outline-primary" onClick={handleRedo} disabled={historyIndex >= history.length - 1}>
            Redo
          </button>
          <button className="btn btn-outline-primary" onClick={downloadText} disabled={text.length === 0}>
            Download
          </button>
        </div>
      </div>

      {/* Font Size and Color */}
      <div className="my-2">
        <label htmlFor="fontSize">Font Size:</label>
        <input
          type="range"
          id="fontSize"
          min="10"
          max="50"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="mx-2"
        />
        <span>{fontSize}px</span>
        <label htmlFor="textColor" className="mx-2">Text Color:</label>
        <input
          type="color"
          id="textColor"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="mx-2"
        />
        <label htmlFor="maxLength">Max Characters: </label>
        <input
          type="number"
          id="maxLength"
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value)}
          min="1"
          className="mx-2"
          style={{
            backgroundColor: mode === "dark" ? "#292a2d" : "#fff",
            color: mode === "dark" ? "#fff" : "#000",
          }}
        />
      </div>

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
          {renderHighlightedText()}
        </div>
      </div>
    </div>
  );
}
