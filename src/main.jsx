import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./logic/context/AuthContext.jsx";
import ProfileProvider from "./logic/context/profileContext.jsx";
import JobProvider from "./logic/context/JobContext.jsx";
import CompanyProvider from "./logic/context/CompanyContext.jsx";
import ApplyProvider from "./logic/context/ApplyContext.jsx";

import "./index.css";

import App from "./App.jsx";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// Register Lordicon once
defineElement(lottie);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

    <ApplyProvider>
      <JobProvider>
        <CompanyProvider>
          <AuthProvider>
            <ProfileProvider>
              <App />
            </ProfileProvider>
          </AuthProvider>
        </CompanyProvider>
      </JobProvider>
      </ApplyProvider>
    </BrowserRouter>
  </StrictMode>,
);
