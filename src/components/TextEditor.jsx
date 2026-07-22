import { useState } from "react";
import { PenLine, Wand2, Search, Palette, Eye } from "lucide-react";
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
  const [textColor, setTextColor] = useState("#0e0e0e");
  const [replaceText, setReplaceText] = useState("");
  const [withText, setWithText] = useState("");
  const [findText, setFindText] = useState("");
  const [maxLength, setMaxLength] = useState(500);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeSection, setActiveSection] = useState("transform");

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
  };

  const handleReplaceText = () => {
    if (replaceText) {
      const newText = text.replace(new RegExp(replaceText, "g"), withText);
      updateText(newText);
    }
  };

  const handleRemoveExtraSpaces = () => updateText(text.replace(/\s+/g, " ").trim());

  const renderHighlightedText = () => {
    if (!findText) return text;
    const regex = new RegExp(`(${findText})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
  };

  const transformText = (transformType) => {
    let t = "";
    switch (transformType) {
      case "upper": t = text.toUpperCase(); break;
      case "lower": t = text.toLowerCase(); break;
      case "title": t = text.toLowerCase().split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "); break;
      case "sentence": t = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); break;
      case "reverse": t = text.split("").reverse().join(""); break;
      default: return;
    }
    updateText(t);
  };

  const copyToClipboard = () => navigator.clipboard.writeText(text);
  const clearText = () => updateText("");
  const clearFormatting = () => { updateText(text.replace(/<\/?[^>]+(>|$)/g, "")); setFontSize(16); setTextColor("#0e0e0e"); };
  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text.txt";
    link.click();
  };
  const handleUndo = () => { if (historyIndex > 0) { setHistoryIndex((p) => p - 1); setText(history[historyIndex - 1]); } };
  const handleRedo = () => { if (historyIndex < history.length - 1) { setHistoryIndex((p) => p + 1); setText(history[historyIndex + 1]); } };

  const sections = [
    { id: "transform", label: "Transform", Icon: Wand2 },
    { id: "find", label: "Find & Replace", Icon: Search },
    { id: "style", label: "Style", Icon: Palette },
    { id: "preview", label: "Preview", Icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-base">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm bg-surface border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent shadow-glow">
            <PenLine size={16} className="text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-primary">{heading}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono px-2 py-1 rounded bg-elevated text-secondary">
            {text.length}/{maxLength}
          </span>
          <UndoRedoDownload handleUndo={handleUndo} handleRedo={handleRedo} downloadText={downloadText} historyIndex={historyIndex} history={history} />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col gap-5">
        {/* Editor */}
        <div className="rounded-2xl overflow-hidden bg-surface border border-border">
          <div className="px-4 py-2 flex items-center justify-between border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-danger" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
            </div>
            <ClipboardAndClear text={text} copyToClipboard={copyToClipboard} clearText={clearText} clearFormatting={clearFormatting} handleRemoveExtraSpaces={handleRemoveExtraSpaces} />
          </div>
          <TextArea text={text} handleTextChange={handleTextChange} fontSize={fontSize} textColor={textColor} />
        </div>

        {/* Stats */}
        <TextStatistics text={text} />

        {/* Tool Sections */}
        <div className="rounded-2xl overflow-hidden bg-surface border border-border">
          {/* Tabs */}
          <div className="flex border-b border-border">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium border-b-2 cursor-pointer transition-all duration-200 ${
                  activeSection === s.id
                    ? "text-accent bg-elevated border-accent"
                    : "text-secondary bg-transparent border-transparent"
                }`}
              >
                <s.Icon size={14} />
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Panel content */}
          <div className="p-4">
            {activeSection === "transform" && (
              <TextTransformButtons text={text} transformText={transformText} />
            )}
            {activeSection === "find" && (
              <FindAndReplace findText={findText} replaceText={replaceText} withText={withText}
                setFindText={setFindText} setReplaceText={setReplaceText} setWithText={setWithText}
                handleReplaceText={handleReplaceText} text={text} />
            )}
            {activeSection === "style" && (
              <FontSizeAndColor fontSize={fontSize} setFontSize={setFontSize} textColor={textColor}
                setTextColor={setTextColor} maxLength={maxLength} setMaxLength={setMaxLength} />
            )}
            {activeSection === "preview" && (
              <Preview renderedText={renderHighlightedText()} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
