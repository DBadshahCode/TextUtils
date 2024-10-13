import React from 'react';

const TextStatistics = ({ text }) => {
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(text.trim().split(/\s+/).filter(Boolean).length / 200); // Average reading speed

  return (
    <span>
      {text.split(/\s+/).filter((element) => element.length !== 0).length} Words, {text.length} Characters, {sentenceCount} Sentences, {paragraphCount} Paragraphs, Estimated Reading Time: {readingTime} min
    </span>
  );
};

export default TextStatistics;
