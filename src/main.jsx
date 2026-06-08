import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./logic/context/AuthContext.jsx";
import ProfileProvider from "./logic/context/profileContext.jsx";
import JobProvider from "./logic/context/JobContext.jsx";

import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <JobProvider>
      <AuthProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </AuthProvider>
      </JobProvider>
    </BrowserRouter>
  </StrictMode>,
);
