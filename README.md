# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Student Assignment Submission System

## Installation

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your system.

### Steps to Install & Run the Project

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/student-assignment-submission.git
   cd student-assignment-submission
   ```

# Install dependencies:

npm install

## Start the development server:

npm run dev

# Project Structure

student-assignment-submission/
│── src/
│ ├── components/
│ │ ├── ui/
│ │ │ ├── card.jsx
│ │ │ ├── button.jsx
│ │ │ ├── input.jsx
│ │ │ ├── textarea.jsx
│ ├── pages/
│ │ ├── AssignmentList.jsx
│ │ ├── AssignmentDetail.jsx
│ ├── App.jsx
│── public/
│── assignments.json (Mock data)
│── tailwind.config.js
│── index.html
│── package.json
│── README.md

# Dependencies

1. React
2. Tailwind CSS
3. Vite (for fast development build)

# Design Decisions

1. State Management: Used React Context API to manage assignment data globally.
2. Mock API: Fetched assignments from a local JSON file to simulate API behavior.
3. Styling: Implemented Tailwind CSS for a responsive and visually appealing interface.
4. Error Handling: Included proper loading indicators and error messages for better user experience.
5. Future Enhancements
6. Integration with a real backend for dynamic assignment fetching and submissions.
7. Role-based authentication for students and teachers.
8. Submission tracking with file storage.
