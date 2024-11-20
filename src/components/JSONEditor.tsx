import React, { useState } from 'react';

interface JSONEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ value, onChange }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setIsCopied(true); // Set button to "Copied"
        setTimeout(() => setIsCopied(false), 2000); // Revert after 2 seconds
      })
      .catch(() => {
        alert('Failed to copy JSON'); // Optional error handling
      });
  };

  return (
    <div className="flex flex-col h-full border rounded-lg shadow-lg bg-white">
    {/* Header with Title and Copy Button */}
    <div className="flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-t-lg font-bold">
    <span>JSON Editor</span>
    <button
          onClick={handleCopy}
          className={`px-3 py-1 text-sm rounded-lg transition ${
            isCopied ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-black hover:bg-gray-500'
          }`}
          disabled={isCopied} // Disable button temporarily if "Copied"
        >
          {isCopied ? 'Copied' : 'Copy Form JSON'}
        </button>
    </div>

    <textarea
      className="flex-grow p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 border-t dark:bg-gray-700 dark:text-white dark:border-gray-600"
      value={value}
      placeholder="Paste or edit your JSON schema here..."
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
};

export default JSONEditor;





