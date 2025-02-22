React Vite App with Redux, Redux-Saga, React Router & Material-UI

🚀 Project Overview

This is a React Vite application that uses Redux for state management, Redux-Saga for handling side effects, React Router for navigation, and Material-UI for styling. The app includes authentication features such as Login and Register.

📌 Features

⚡ Fast development with Vite

🌍 Client-side routing using React Router

🔥 State management with Redux & Redux-Saga

🎨 UI Components with Material-UI

🔐 Authentication: Login & Register

🛠️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/zyberdon/healthcare_portal_fe.git
cd healthcare_portal_fe

2️⃣ Install Dependencies

npm install

🚦 Running the App

Start the development server:

npm run dev

The app will be available at: http://localhost:5173/

🔧 Project Structure

📦 Dependencies

"dependencies": {
  "@mui/material": "latest",
  "react": "latest",
  "react-dom": "latest",
  "react-router-dom": "latest",
  "react-redux": "latest",
  "redux": "latest",
  "redux-saga": "latest"
}

🔑 Authentication (Login & Register)

Login Request Example

const req = {
  url: 'https://api.example.com/login',
  reqBody: {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'user@example.com',
      password: 'password123'
    })
  }
};
dispatch(postLogin(req));

🚀 Build for Production

To create an optimized build for production:

npm run build

🛑 Stop the Server

CTRL + C

📝 License

This project is open-source and available under the MIT License.

📩 Contact

For any issues or contributions, feel free to open an issue or submit a pull request!

Project URL: GitHub Repository

Happy Coding! 🎉