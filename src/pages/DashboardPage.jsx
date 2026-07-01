import DashboardLayout from "../layouts/DashboardLayout.jsx";
import JobsPage from "../components/dashboard/Jobs/JobsPage.jsx";
import CompaniesPage from "../components/dashboard/Companies/CompaniesPage.jsx";
import JobDetailsPage from "../components/dashboard/JobDetails/JobDetailspage.jsx";
import SavedJobs from "../components/dashboard/savedJobs/savedJobs.jsx";
import CompanyPage from "../components/dashboard/Company/CompanyPage.jsx";
import CreateCompanyPage from "../components/dashboard/CreateCompany/CreateCompanyPage.jsx";
import LoadingPage from "../components/profile/JobSeekerProfile/LoadingPage.jsx";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useProfile } from "../logic/context/profileContext.jsx";


export default function DashboardPage() {
  const [part, setPart] = useState(0);

  const { ...state  } = useProfile();
  


  return (
    <DashboardLayout part={part} setPart={setPart}>

      <Routes>
        <Route path="Jobs" element={<JobsPage />} />
        <Route path="Jobs/Details/:JobId" element={<JobDetailsPage />} />
        <Route path="Companies" element={<CompaniesPage />} />
        <Route path="Saved" element={<SavedJobs />} />

        <Route path="My_Company" element={state.isLoading ? <LoadingPage/> : ( state.user?.hasCompany  ?  <CompanyPage /> :  <CreateCompanyPage /> )  } />

      </Routes>

    </DashboardLayout>
  );
}
