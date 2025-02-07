import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto mt-5">
      <h2 className="text-xl font-bold mb-4">Rich Text Editor</h2>
      <ReactQuill 
        theme="snow" 
        value={content} 
        onChange={setContent} 
        modules={modules} 
      />
      <div className="mt-4 p-4 bg-gray-100 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold mb-2">Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default RichTextEditor;
