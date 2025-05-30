import React from 'react';

const TextStatistics = ({ text }) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words per minute

  return (
    <div className="my-2">
      <p>
        <strong>Words:</strong> {words} &nbsp;|&nbsp;
        <strong>Characters:</strong> {characters} &nbsp;|&nbsp;
        <strong>Sentences:</strong> {sentenceCount} &nbsp;|&nbsp;
        <strong>Paragraphs:</strong> {paragraphCount} &nbsp;|&nbsp;
        <strong>Average Sentence Length:</strong> {words / sentenceCount || 0} words &nbsp;|&nbsp;
        <strong>Estimated Reading Time:</strong> {readingTime} min
      </p>
    </div>
  );
};

export default TextStatistics;
