import "./App.css";
import AuthPage1 from "./pages/AuthPage1.jsx";
import DashboardLayout from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import CompleteProfilePage from "./pages/CompleteProfilePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/login" element={<AuthPage1 />} />

      <Route path="/CompleteProfile" element={<CompleteProfilePage />} />
    </Routes>
  );
}

export default App;
