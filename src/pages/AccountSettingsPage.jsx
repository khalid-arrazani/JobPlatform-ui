
import AccountSettingsLayout from "../layouts/AccountSettingsLayout"
import JobSeekerASPage  from "../components/account-settings/job-seeker/JobSeekerASPage"
import RecruiterASPage from ".."
export default function AccountSettingsPage() {
  return (
    <AccountSettingsLayout>
      <JobSeekerASPage/>
    </AccountSettingsLayout>
  );
}