import React from "react";

const TextTransformButtons = ({ text, transformText }) => {
  const isDisabled = text.length === 0;

  const buttons = [
    { type: "upper", icon: "fa-arrow-up-a-z", label: "UPPERCASE" },
    { type: "lower", icon: "fa-arrow-down-a-z", label: "lowercase" },
    { type: "title", icon: "fa-heading", label: "Title Case" },
    { type: "sentence", icon: "fa-align-left", label: "Sentence case" },
    { type: "reverse", icon: "fa-arrows-rotate", label: "esreveR" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {buttons.map(({ type, icon, label }) => (
        <button key={type} onClick={() => transformText(type)} disabled={isDisabled} title={label}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{
            background: "var(--bg-elevated)",
            color: "var(--text-secondary)",
            border: "1px solid var(--border)",
          }}
          onMouseEnter={e => { if (!isDisabled) { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}>
          <i className={`fas ${icon} text-xs`} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default TextTransformButtons;
