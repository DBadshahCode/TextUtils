import React from "react";

const TextStatistics = ({ text }) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 200);

  const stats = [
    { label: "Words", value: words, icon: "fa-align-left", color: "#6366f1" },
    { label: "Chars", value: characters, icon: "fa-font", color: "#a78bfa" },
    { label: "Sentences", value: sentenceCount, icon: "fa-paragraph", color: "#34d399" },
    { label: "Paragraphs", value: paragraphCount, icon: "fa-indent", color: "#fbbf24" },
    { label: "Read Time", value: `${readingTime}m`, icon: "fa-clock", color: "#f87171" },
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {stats.map((stat, i) => (
        <div key={i}
          className="flex flex-col items-center gap-1 py-3 rounded-xl transition-all duration-200 hover:scale-105"
          style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
          <i className={`fas ${stat.icon} text-xs`} style={{ color: stat.color }} />
          <span className="text-lg font-semibold" style={{ color: "var(--text-primary)", fontFamily: "'DM Mono', monospace" }}>
            {stat.value}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TextStatistics;
