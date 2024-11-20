import React, { useState, useEffect } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';
import { useTheme } from './ThemeContext';
// import JSONEditor from './JSONEditor';
// import FormPreview from './FormPreview';
// import { useTheme } from './ThemeContext';  // Make sure you have this context set up as explained before.

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const sampleSchema = {
    formTitle: 'Sample Form',
    formDescription: 'This is a sample form preview.',
    fields: [
      { id: 'name', label: 'Name', placeholder: 'Enter your name', required: true },
      { id: 'email', label: 'Email', placeholder: 'Enter your email', required: true },
    ],
  };

  const [jsonSchema, setJsonSchema] = React.useState(JSON.stringify(sampleSchema, null, 2));
  const [parsedSchema, setParsedSchema] = React.useState<any>(sampleSchema);

  const handleJSONChange = (value: string) => {
    setJsonSchema(value);
    try {
      const parsed = JSON.parse(value);
      setParsedSchema(parsed);
    } catch {
      setParsedSchema(null);
    }
  };

  // Toggle dark mode
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen p-6">
      <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      >
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <JSONEditor value={jsonSchema} onChange={handleJSONChange} />
        </div>
        <div className="w-full md:w-1/2">
          {parsedSchema ? (
            <FormPreview schema={parsedSchema} />
          ) : (
            <p className="text-red-500">Invalid JSON schema</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

