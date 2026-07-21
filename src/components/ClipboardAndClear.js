import React, { useState } from "react";

const ClipboardAndClear = ({ text, copyToClipboard, clearText, clearFormatting, handleRemoveExtraSpaces }) => {
  const isDisabled = text.length === 0;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard();
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const btnBase = {
    background: "transparent",
    color: "var(--text-secondary)",
    border: "none",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.3 : 1,
  };

  const actions = [
    { icon: copied ? "fa-check" : "fa-copy", action: handleCopy, title: copied ? "Copied!" : "Copy", color: copied ? "#34d399" : undefined },
    { icon: "fa-compress-arrows-alt", action: handleRemoveExtraSpaces, title: "Remove Extra Spaces" },
    { icon: "fa-eraser", action: clearFormatting, title: "Clear Formatting" },
    { icon: "fa-trash", action: clearText, title: "Clear All", color: isDisabled ? undefined : "#f87171", hoverDanger: true },
  ];

  return (
    <div className="flex items-center gap-1">
      {actions.map(({ icon, action, title, color }) => (
        <button key={title} onClick={!isDisabled ? action : undefined} title={title}
          className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
          style={{ ...btnBase, color: color || "var(--text-muted)" }}>
          <i className={`fas ${icon} text-xs`} />
        </button>
      ))}
    </div>
  );
};

export default ClipboardAndClear;
