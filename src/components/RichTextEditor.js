import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ErrorBoundary from './ErrorBoundary';

const RichTextEditor = ({ heading }) => {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'size': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'header': 1 }, { 'header': 2 }, 'blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto mt-5">
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      <ErrorBoundary>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder='Compose an epic...'
          modules={modules}
        />
      </ErrorBoundary>
      <div className="mt-4 p-4 bg-gray-100 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold mb-2">Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default RichTextEditor;
