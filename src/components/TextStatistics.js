import React from 'react';

const TextStatistics = ({ text }) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 200); // Average reading speed: 200 wpm

  return (
    <div className="my-4">
      <div className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
        <p><strong>Words:</strong> {words}</p>
        <p><strong>Characters:</strong> {characters}</p>
        <p><strong>Sentences:</strong> {sentenceCount}</p>
        <p><strong>Paragraphs:</strong> {paragraphCount}</p>
        <p><strong>Estimated Reading Time:</strong> {readingTime} min</p>
      </div>
    </div>
  );
};

export default TextStatistics;
