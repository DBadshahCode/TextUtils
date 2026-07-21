import React from "react";
import { EyeOff } from "lucide-react";

const Preview = ({ renderedText }) => {
  return (
    <div className="min-h-[120px] max-h-72 overflow-y-auto rounded-xl p-4 text-sm leading-relaxed bg-input border border-border text-primary font-mono whitespace-pre-wrap break-words">
      {renderedText ? (
        <div>{renderedText}</div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center gap-2 py-8 text-muted">
          <EyeOff size={24} />
          <span className="text-xs">Nothing to preview yet...</span>
        </div>
      )}
    </div>
  );
};

export default Preview;
