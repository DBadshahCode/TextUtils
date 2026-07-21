import React from "react";
import { AlignLeft, Type, Pilcrow, Indent, Clock } from "lucide-react";

const TextStatistics = ({ text }) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 200);

  const stats = [
    { label: "Words", value: words, Icon: AlignLeft, color: "#6366f1" },
    { label: "Chars", value: characters, Icon: Type, color: "#a78bfa" },
    { label: "Sentences", value: sentenceCount, Icon: Pilcrow, color: "#34d399" },
    { label: "Paragraphs", value: paragraphCount, Icon: Indent, color: "#fbbf24" },
    { label: "Read Time", value: `${readingTime}m`, Icon: Clock, color: "#f87171" },
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-1 py-3 rounded-xl bg-surface border border-border transition-all duration-200 hover:scale-105"
        >
          <stat.Icon size={14} style={{ color: stat.color }} />
          <span className="text-lg font-semibold text-primary font-mono">{stat.value}</span>
          <span className="text-xs text-muted">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TextStatistics;
