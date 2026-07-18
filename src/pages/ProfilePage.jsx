
import ProfileLayout from "../layouts/ProfileLayout.jsx"
import JobSeekerProfilePage from "../components/profile/JobSeekerProfile/JobSeekerProfilePage.jsx"
import RecruiterProfilePage from "../components/profile/RecruiterProfile/RecruiterProfilePage.jsx"
import { useAuth } from "../logic/context/AuthContext.jsx"

export default function ProfilePage(){
  const {  ...state} = useAuth()
  
  console.log(state);

    return<>
    <ProfileLayout>
      {state.user?.role == "jobSeeker" ? <JobSeekerProfilePage/>  : state.user?.role == "recruiter" ? <RecruiterProfilePage/> : null }
    
    </ProfileLayout>
    </>
}