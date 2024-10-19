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
        <strong>Words:</strong> {words} <br />
        <strong>Characters:</strong> {characters} <br />
        <strong>Sentences:</strong> {sentenceCount} <br />
        <strong>Paragraphs:</strong> {paragraphCount} <br />
        <strong>Estimated Reading Time:</strong> {readingTime} min
      </p>
    </div>
  );
};

export default TextStatistics;
