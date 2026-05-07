import DashboardLayout from "../layouts/DashboardLayout.jsx";
import JobsPage from "../components/dashboard/Jobs/JobsPage.jsx"
import CompaniesPage from "../components/dashboard/Companies/CompaniesPage.jsx"

export default function DashboardPage() {
  return (
    <DashboardLayout>
     <JobsPage/>
     
    </DashboardLayout>
  );
}