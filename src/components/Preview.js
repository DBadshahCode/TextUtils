const Preview = ({ renderedText }) => {
  return (
    <div className="my-3 px-4">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Preview</h4>
      <div
        className="min-h-[100px] max-h-80 overflow-y-auto p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
      >
        {renderedText}
      </div>
    </div>
  );
};

export default Preview;
