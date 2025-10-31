import { useState } from "react";
import TextArea from "./TextArea";
import TextStatistics from "./TextStatistics";
import TextTransformButtons from "./TextTransformButtons";
import ClipboardAndClear from "./ClipboardAndClear";
import FindAndReplace from "./FindAndReplace";
import UndoRedoDownload from "./UndoRedoDownload";
import FontSizeAndColor from "./FontSizeAndColor";
import Preview from "./Preview";

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
    if (newText.length <= maxLength) updateText(newText);
    else console.log("Character limit exceeded!");
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
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
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

  const copyToClipboard = () => navigator.clipboard.writeText(text);
  const clearText = () => updateText("");
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

  return (
    <div
      className="max-w-6xl mx-auto my-8 p-6 rounded-3xl shadow-xl
      bg-gradient-to-br from-white/80 to-gray-100/60 dark:from-gray-900/70 dark:to-gray-800/70
      backdrop-blur-lg border border-gray-200/60 dark:border-gray-700/50 transition-all duration-500"
    >
      <h3 className="text-center mb-6 text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
        {heading}
      </h3>

      {/* Main editor section */}
      <div className="flex flex-col gap-4">
        <TextArea text={text} handleTextChange={handleTextChange} fontSize={fontSize} textColor={textColor} />

        {/* Toolbar sections */}
        <div className="flex flex-wrap justify-between gap-3 items-center">
          <UndoRedoDownload
            handleUndo={handleUndo}
            handleRedo={handleRedo}
            downloadText={downloadText}
            historyIndex={historyIndex}
            history={history}
          />
          <ClipboardAndClear
            text={text}
            copyToClipboard={copyToClipboard}
            clearText={clearText}
            clearFormatting={clearFormatting}
            handleRemoveExtraSpaces={handleRemoveExtraSpaces}
          />
        </div>

        <div className="flex flex-wrap justify-between gap-3 items-center">
          <TextTransformButtons text={text} transformText={transformText} />
          <FontSizeAndColor
            fontSize={fontSize}
            setFontSize={setFontSize}
            textColor={textColor}
            setTextColor={setTextColor}
            maxLength={maxLength}
            setMaxLength={setMaxLength}
          />
        </div>

        <FindAndReplace
          findText={findText}
          replaceText={replaceText}
          withText={withText}
          setFindText={setFindText}
          setReplaceText={setReplaceText}
          setWithText={setWithText}
          handleReplaceText={handleReplaceText}
          text={text}
        />

        <TextStatistics text={text} />
        <Preview renderedText={renderHighlightedText()} />
      </div>
    </div>
  );
}
