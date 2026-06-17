import DashboardLayout from "../layouts/DashboardLayout.jsx";
import JobsPage from "../components/dashboard/Jobs/JobsPage.jsx";
import CompaniesPage from "../components/dashboard/Companies/CompaniesPage.jsx";
import JobDetailsPage from "../components/dashboard/JobDetails/JobDetailspage.jsx";
import SavedJobs from "../components/dashboard/savedJobs/savedJobs.jsx";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CompanyLayout from "../layouts/CompanyLayout.jsx";
import CompanyPage from "./CompanyPage.jsx";

export default function DashboardPage() {
  const [part, setPart] = useState(0);

  return (
    <DashboardLayout part={part} setPart={setPart}>

      <Routes>
        <Route path="Jobs" element={<JobsPage />} />
        <Route path="Jobs/Details/:JobId" element={<JobDetailsPage />} />
        <Route path="Companies" element={<CompaniesPage />} />
        <Route path="Saved" element={<SavedJobs />} />
        <Route path="My_Company" element={<CompanyPage />} />
      </Routes>

    </DashboardLayout>
  );
}
