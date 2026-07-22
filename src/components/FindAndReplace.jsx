import React from "react";
import { RefreshCw } from "lucide-react";

const inputClass =
  "flex-1 min-w-[120px] bg-input border border-border text-primary rounded-[10px] px-3 py-2 text-sm font-mono outline-none transition-colors focus:border-accent";

const countMatches = (text, findText) => {
  if (!findText) return 0;
  try {
    return (text.match(new RegExp(findText, "gi")) || []).length;
  } catch {
    return 0; // incomplete/invalid regex while typing, e.g. a lone "("
  }
};

const FindAndReplace = ({ findText, replaceText, withText, setFindText, setReplaceText, setWithText, handleReplaceText, text }) => {
  const isDisabled = text.length === 0 || !replaceText;
  const matchCount = countMatches(text, findText);

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <div className="flex-1 min-w-[120px] flex flex-col gap-1">
        <input type="text" placeholder="Find..." value={findText} onChange={e => setFindText(e.target.value)} className={inputClass + " w-full"} />
        {findText && (
          <span className={`text-xs font-mono ${matchCount ? "text-accent" : "text-muted"}`}>
            {matchCount ? `${matchCount} match${matchCount === 1 ? "" : "es"} found` : "No matches"}
          </span>
        )}
      </div>
      <input type="text" placeholder="Replace..." value={replaceText} onChange={e => setReplaceText(e.target.value)} className={inputClass} />
      <input type="text" placeholder="With..." value={withText} onChange={e => setWithText(e.target.value)} className={inputClass} />
      <button
        onClick={handleReplaceText}
        disabled={isDisabled}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap bg-accent text-white border-none cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <RefreshCw size={14} />
        Replace All
      </button>
    </div>
  );
};

export default FindAndReplace;
