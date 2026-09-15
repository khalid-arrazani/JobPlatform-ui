import CompleteProfileLayout from "../layouts/CompleteProfileLayout.jsx";
import JobSeekerCPPage from "../components/Complete-Profile/For-JobSeeker/JobSeekerCPPage.jsx"
import RecruiterCPPage from "../components/Complete-Profile/For-Recruiter/RecruiterCPPage.jsx";
import { useAuth } from "../logic/context/AuthContext.jsx";
 



export default function CompleteProfilePage() {

  const {...state} = useAuth()



  return (
    <CompleteProfileLayout>
       {state.user?.user?.role == "jobSeeker" ? <RecruiterCPPage/>  : state.user?.user?.role == "recruiter" ? <RecruiterCPPage/> : null }
    </CompleteProfileLayout>

  );
}