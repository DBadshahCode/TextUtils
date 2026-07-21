import React from "react";

const FontSizeAndColor = ({ fontSize, setFontSize, textColor, setTextColor, maxLength, setMaxLength }) => {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      {/* Max Characters */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>Max Characters</label>
        <input type="number" value={maxLength} onChange={e => setMaxLength(e.target.value)} min="1"
          className="w-24 px-3 py-2 rounded-xl text-sm transition-all"
          style={{ background: "var(--bg-input)", border: "1px solid var(--border)", color: "var(--text-primary)", outline: "none", fontFamily: "'DM Mono', monospace" }}
          onFocus={e => e.target.style.borderColor = "var(--accent)"}
          onBlur={e => e.target.style.borderColor = "var(--border)"} />
      </div>

      {/* Font Size */}
      <div className="flex flex-col gap-1.5 flex-1 min-w-[160px]">
        <div className="flex justify-between">
          <label className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>Font Size</label>
          <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>{fontSize}px</span>
        </div>
        <input type="range" min="10" max="50" value={fontSize} onChange={e => setFontSize(e.target.value)} className="w-full" />
      </div>

      {/* Text Color */}
      <div className="flex flex-col gap-1.5 items-center">
        <label className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>Text Color</label>
        <div className="w-10 h-10 rounded-xl overflow-hidden border-2 transition-all hover:scale-110"
          style={{ borderColor: "var(--border)" }}>
          <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)}
            className="w-14 h-14 -translate-x-1 -translate-y-1" />
        </div>
      </div>
    </div>
  );
};

export default FontSizeAndColor;
