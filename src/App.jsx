import { Card, Typography, Box, Button, Collapse } from "@mui/material";


import "./App.css";

import AuthPage1 from "./pages/AuthPage1.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import CompleteProfilePage from "./pages/CompleteProfilePage.jsx";
import AccountSettingsPage from "./pages/AccountSettingsPage.jsx";

import SimpleSnackbar from "./logic/context/SnackBars.jsx";

import JobDetailsPage from "./pages/JobDetailsPage.jsx";
// import CompanyLayout from "./layouts/CompanyLayout.jsx";

import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Box sx={{position:"absolute",height:"100vh",width:"100vw",zIndex:9000,bgcolor:"#fafafa"}}> </Box>
      <SimpleSnackbar />
      <Routes>
        <Route path="/Dashboard/*" element={<DashboardPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/login" element={<AuthPage1 />} />

        <Route path="/CompleteProfile" element={<CompleteProfilePage />} />

        <Route path="/AccountSettings" element={<AccountSettingsPage />} />

        <Route path="/JobDetails" element={<JobDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
