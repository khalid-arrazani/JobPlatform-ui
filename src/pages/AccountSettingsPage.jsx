
import AccountSettingsLayout from "../layouts/AccountSettingsLayout"
import JobSeekerASPage  from "../components/account-settings/job-seeker/JobSeekerASPage.jsx"
import RecruiterASPage from "../components/account-settings/recruiter/RecruiterASPage.jsx"
export default function AccountSettingsPage() {
  
  return (
    <AccountSettingsLayout>
      <JobSeekerASPage/>
    </AccountSettingsLayout>
  );
}