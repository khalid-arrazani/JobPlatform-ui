import DashboardLayout from "../layouts/DashboardLayout.jsx";
import JobsPage from "../components/dashboard/Jobs/JobsPage.jsx";
import CompaniesPage from "../components/dashboard/Companies/CompaniesPage.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function DashboardPage() {
  const [part, setPart] = useState(0);
  return (
    <DashboardLayout part={part} setPart={setPart}>

      <Routes>
        <Route index element={<JobsPage />} />
        
        <Route path="Companies" element={<CompaniesPage />} />
      </Routes>

    </DashboardLayout>
  );
}
