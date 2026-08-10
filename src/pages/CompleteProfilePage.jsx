import CompleteProfileLayout from "../layouts/CompleteProfileLayout.jsx";
import JobSeekerCPPage from "../components/Complete-Profile/For-JobSeeker/JobSeekerCPPage.jsx"
import RecruiterCPPage from "../components/Complete-Profile/For-Recruiter/RecruiterCPPage.jsx";
import { useAuth } from "../logic/context/AuthContext.jsx";
 



export default function CompleteProfilePage() {

  const {...state} = useAuth()


console.log(state , 5555);


  return (
    <CompleteProfileLayout>
       {state.user?.user?.role == "jobSeeker" ? <JobSeekerCPPage/>  : state.user?.user?.role == "recruiter" ? <RecruiterCPPage/> : null }
    </CompleteProfileLayout>

  );
}