import React, { useState } from "react";
import { Check, Copy, Minimize2, Eraser, Trash2 } from "lucide-react";

const ClipboardAndClear = ({ text, copyToClipboard, clearText, clearFormatting, handleRemoveExtraSpaces }) => {
  const isDisabled = text.length === 0;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard();
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const actions = [
    { key: "copy", Icon: copied ? Check : Copy, action: handleCopy, title: copied ? "Copied!" : "Copy", colorClass: copied ? "text-success" : "text-muted" },
    { key: "trim", Icon: Minimize2, action: handleRemoveExtraSpaces, title: "Remove Extra Spaces", colorClass: "text-muted" },
    { key: "clear-fmt", Icon: Eraser, action: clearFormatting, title: "Clear Formatting", colorClass: "text-muted" },
    { key: "clear-all", Icon: Trash2, action: clearText, title: "Clear All", colorClass: isDisabled ? "text-muted" : "text-danger" },
  ];

  return (
    <div className="flex items-center gap-1">
      {actions.map(({ key, Icon, action, title, colorClass }) => (
        <button
          key={key}
          onClick={!isDisabled ? action : undefined}
          title={title}
          disabled={isDisabled}
          className={`w-8 h-8 flex items-center justify-center rounded-lg bg-transparent border-none cursor-pointer transition-all duration-200 hover:scale-110 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 ${colorClass}`}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
};

export default ClipboardAndClear;
