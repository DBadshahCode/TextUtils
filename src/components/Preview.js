import React from "react";

const Preview = ({ renderedText }) => {
  return (
    <div className="my-4 px-4">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
        <i className="fas fa-eye text-blue-500" />
        Preview
      </h4>

      <div
        className="min-h-[120px] max-h-80 overflow-y-auto p-4 rounded-2xl border border-gray-200 dark:border-gray-700
        bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-sm text-gray-800 dark:text-gray-100
        transition-all duration-300 hover:shadow-md"
      >
        {renderedText ? (
          <div className="whitespace-pre-wrap break-words">{renderedText}</div>
        ) : (
          <div className="text-gray-400 dark:text-gray-500 italic text-sm text-center py-6">
            Nothing to preview yet...
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
