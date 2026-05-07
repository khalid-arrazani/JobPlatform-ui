import DashboardLayout from "../layouts/DashboardLayout.jsx";
import JobsPage from "../components/dashboard/Jobs/JobsPage.jsx"

export default function DashboardPage() {
  return (
    <DashboardLayout>
     <JobsPage/>
     
    </DashboardLayout>
  );
}