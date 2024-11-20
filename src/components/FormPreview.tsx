import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormPreviewProps {
  schema: any;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState<any | null>(null);

  const onSubmit = (data: any) => {
    setFormData(data); // Save form data
    alert('Form submitted successfully!');
  };


  const handleDownload = () => {
    if (!formData) {
      alert('No form submission to download.');
      return;
    }
    const blob = new Blob([JSON.stringify(formData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${schema.formTitle || 'form_submission'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full border rounded-lg shadow-lg bg-white dark:bg-gray-800">
      <div className="bg-green-500 text-white px-4 py-2 rounded-t-lg font-bold">
        Form Preview
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6 p-6"
      >
        <h1 className="text-2xl font-bold text-gray-700 dark:text-white">{schema.formTitle}</h1>
        <p className="text-gray-500 dark:text-gray-300">{schema.formDescription}</p>
        {schema.fields.map((field: any) => (
          <div key={field.id} className="flex flex-col space-y-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium">{field.label}</label>
            <input
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            {errors[field.id] && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
        ))}
        <div className="flex space-x-4">
        <button
          type="submit"
          className="self-start bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition dark:bg-green-700 dark:hover:bg-green-600"
        >
          Submit
        </button>
        <button
            type="button"
            onClick={handleDownload}
            className="self-start bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition"
          >
            Download JSON
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPreview;


