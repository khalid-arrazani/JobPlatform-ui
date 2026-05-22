import "./App.css";
import AuthPage1 from "./pages/AuthPage1.jsx";
import DashboardLayout from "./pages/DashboardPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import CompleteProfilePage from "./pages/CompleteProfilePage.jsx";
import AccountSettingsPage from "./pages/AccountSettingsPage.jsx"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/login" element={<AuthPage1 />} />

      <Route path="/CompleteProfile" element={<CompleteProfilePage />} />

      <Route path="/AccountSettings" element={<AccountSettingsPage />} />
    </Routes>
  );
}

export default App;
