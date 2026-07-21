import React from "react";

const Preview = ({ renderedText }) => {
  return (
    <div className="min-h-[120px] max-h-72 overflow-y-auto rounded-xl p-4 text-sm leading-relaxed"
      style={{
        background: "var(--bg-input)",
        border: "1px solid var(--border)",
        color: "var(--text-primary)",
        fontFamily: "'DM Mono', monospace",
        whiteSpace: "pre-wrap",
        wordBreak: "break-words",
      }}>
      {renderedText ? (
        <div>{renderedText}</div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center gap-2 py-8"
          style={{ color: "var(--text-muted)" }}>
          <i className="fas fa-eye-slash text-2xl" />
          <span className="text-xs">Nothing to preview yet...</span>
        </div>
      )}
    </div>
  );
};

export default Preview;
