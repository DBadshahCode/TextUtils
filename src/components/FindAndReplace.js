import React from "react";

const FindAndReplace = ({ findText, replaceText, withText, setFindText, setReplaceText, setWithText, handleReplaceText, text }) => {
  const isDisabled = text.length === 0 || !replaceText;

  const inputStyle = {
    background: "var(--bg-input)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "10px",
    padding: "8px 12px",
    fontSize: "14px",
    outline: "none",
    flex: 1,
    minWidth: "120px",
    fontFamily: "'DM Mono', monospace",
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <input type="text" placeholder="Find..." value={findText} onChange={e => setFindText(e.target.value)}
        style={inputStyle}
        onFocus={e => e.target.style.borderColor = "var(--accent)"}
        onBlur={e => e.target.style.borderColor = "var(--border)"} />
      <input type="text" placeholder="Replace..." value={replaceText} onChange={e => setReplaceText(e.target.value)}
        style={inputStyle}
        onFocus={e => e.target.style.borderColor = "var(--accent)"}
        onBlur={e => e.target.style.borderColor = "var(--border)"} />
      <input type="text" placeholder="With..." value={withText} onChange={e => setWithText(e.target.value)}
        style={inputStyle}
        onFocus={e => e.target.style.borderColor = "var(--accent)"}
        onBlur={e => e.target.style.borderColor = "var(--border)"} />
      <button onClick={handleReplaceText} disabled={isDisabled}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ background: "var(--accent)", color: "white", border: "none", whiteSpace: "nowrap" }}>
        <i className="fas fa-sync-alt text-xs" />
        Replace All
      </button>
    </div>
  );
};

export default FindAndReplace;
