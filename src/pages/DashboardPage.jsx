import DashboardLayout from "../layouts/DashboardLayout.jsx";
import JobsPage from "../components/dashboard/Jobs/JobsPage.jsx"
import CompaniesPage from "../components/dashboard/Companies/CompaniesPage.jsx"
import { useState } from "react";

export default function DashboardPage() {
  const [part , setPart]=useState("Jobs")
  return (
    <DashboardLayout
    part={part}
    setPart={setPart}
    >
      {part=="Jobs"?<JobsPage/>: <CompaniesPage/>}
    
    </DashboardLayout>
  );
}