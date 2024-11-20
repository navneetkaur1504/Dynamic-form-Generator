# Dynamic Form Generator

## Challenge Overview

The **Dynamic Form Generator** is an application that allows users to dynamically generate functional forms based on a JSON schema. The application provides a real-time interface for editing JSON schema and generating a preview of the form. The form updates instantly as the schema changes, offering a seamless experience for form creation.

The form supports various field types, including text inputs, checkboxes, radio buttons, and more. It also features validation, error handling, and a clean, mobile-responsive UI.


## Features

### Main Interface
- **Left Side**: JSON Editor
  - Syntax highlighting for JSON.
  - Real-time JSON validation with error messages for invalid JSON.

- **Right Side**: Generated Form Preview
  - Real-time updates of the form as the JSON schema is modified.
  - Mobile-responsive layout.
  - Error handling and form validation.

### Form Features
- Supports various field types defined in the JSON schema.
- Displays validation messages for required fields.
- Includes loading states when generating the form.
- Responsive and consistent design using **Tailwind CSS**.

## Technical Requirements
- **React 18+**: For building dynamic user interfaces.
- **TypeScript**: For static typing and improved code safety.
- **Tailwind CSS**: For responsive, customizable, and modern UI styling.
- **React Hook Form**: For managing form state and validation.
- **Playwright**: For end-to-end (E2E) testing.
- **Jest**: For unit testing.

## Setup Instructions

To set up the project locally, follow these steps:

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/dynamic-form-generator.git

### 2. Install dependencies
cd dynamic-form-generator
npm install

### 3. Start the development server
npm start



## Example JSON Schemas
Below are example of JSON schemas that you can paste into the JSON editor to generate forms dynamically.

>>>Basic Form

{
  "formTitle": "Contact Us",
  "formDescription": "Please provide your contact information.",
  "fields": [
    {
      "id": "name",
      "label": "Name",
      "placeholder": "Enter your name",
      "required": true
    },
    {
      "id": "email",
      "label": "Email",
      "placeholder": "Enter your email",
      "required": true
    },
    {
      "id": "message",
      "label": "Message",
      "placeholder": "Enter your message",
      "required": true
    }
  ]
}



##Local Development Guide
###1. Modifying the Form Layout
You can modify the form layout by updating the form fields directly in the JSON schema. The form will automatically update when you make changes.

For example, if you want to add a new field, just add another field object to the fields array in the JSON schema.

###2. Customizing Form Styles
To adjust the form styling, you can modify the Tailwind CSS classes used in the components. The Tailwind configuration is located in tailwind.config.js. You can add custom colors, spacing, and other styles to better match your design requirements.

###3. Adding Validation Logic
Form field validation is handled using React Hook Form. You can add custom validation rules in the register method of the form inputs. For example, to make a field required, you can use the following syntax:
