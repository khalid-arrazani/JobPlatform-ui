
import AccountSettingsLayout from "../layouts/AccountSettingsLayout"
import JobSeekerASPage  from "../components/account-settings/job-seeker/JobSeekerASPage.jsx"
import { useAuth } from "../logic/context/AuthContext.jsx";
import RecruiterASPage from "../components/account-settings/recruiter/RecruiterASPage.jsx"

export default function AccountSettingsPage() {
const {...state} = useAuth()
  return (
    <AccountSettingsLayout>
   
       {state.user?.user?.role == "jobSeeker" ? <JobSeekerASPage/>  : state.user?.user?.role == "recruiter" ? <RecruiterASPage/> : null }
    </AccountSettingsLayout>
  );
}