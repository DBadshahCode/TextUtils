import React from "react";
import { ArrowUpAZ, ArrowDownAZ, Heading, AlignLeft, ArrowLeftRight } from "lucide-react";

const TextTransformButtons = ({ text, transformText }) => {
  const isDisabled = text.length === 0;

  const buttons = [
    { type: "upper", Icon: ArrowUpAZ, label: "UPPERCASE" },
    { type: "lower", Icon: ArrowDownAZ, label: "lowercase" },
    { type: "title", Icon: Heading, label: "Title Case" },
    { type: "sentence", Icon: AlignLeft, label: "Sentence case" },
    { type: "reverse", Icon: ArrowLeftRight, label: "esreveR" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {buttons.map(({ type, Icon, label }) => (
        <button
          key={type}
          onClick={() => transformText(type)}
          disabled={isDisabled}
          title={label}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-elevated text-secondary border border-border cursor-pointer transition-all duration-200 hover:scale-105 hover:border-accent hover:text-accent active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:border-border disabled:hover:text-secondary"
        >
          <Icon size={14} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default TextTransformButtons;
