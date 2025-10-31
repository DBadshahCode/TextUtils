import React from "react";

const TextStatistics = ({ text }) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 200); // Avg reading speed: 200 wpm

  const stats = [
    { label: "Words", value: words, icon: "fa-align-left" },
    { label: "Characters", value: characters, icon: "fa-font" },
    { label: "Sentences", value: sentenceCount, icon: "fa-paragraph" },
    { label: "Paragraphs", value: paragraphCount, icon: "fa-indent" },
    { label: "Read Time", value: `${readingTime} min`, icon: "fa-clock" },
  ];

  return (
    <div
      className="my-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
      bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-sm
      transition-all duration-300 hover:shadow-md"
    >
      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
        <i className="fas fa-chart-bar text-blue-500" />
        Text Statistics
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-sm text-gray-800 dark:text-gray-200">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50/70 dark:bg-gray-700/50 
            rounded-xl p-2 shadow-inner"
          >
            <i className={`fas ${stat.icon} text-blue-500 mb-1`} />
            <span className="font-semibold">{stat.value}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextStatistics;
