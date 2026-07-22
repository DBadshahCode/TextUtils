import React from "react";

/**
 * Fast hover tooltip to replace the native `title` attribute, which has a
 * long OS-controlled delay before it appears. This shows almost instantly.
 * Usage: <Tooltip label="Copy"><button>...</button></Tooltip>
 */
const Tooltip = ({ label, children, position = "bottom" }) => {
  const posClasses = position === "top" ? "bottom-full mb-1.5" : "top-full mt-1.5";

  return (
    <span className="relative inline-flex group">
      {children}
      <span
        role="tooltip"
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 ${posClasses} z-20 whitespace-nowrap rounded-md border border-border bg-elevated px-2 py-1 text-xs font-medium text-primary shadow-md opacity-0 scale-95 transition-all duration-100 group-hover:opacity-100 group-hover:scale-100`}
      >
        {label}
      </span>
    </span>
  );
};

export default Tooltip;
