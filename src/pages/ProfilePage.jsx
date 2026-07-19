
import ProfileLayout from "../layouts/ProfileLayout.jsx"
import JobSeekerProfilePage from "../components/profile/JobSeekerProfile/JobSeekerProfilePage.jsx"
import RecruiterProfilePage from "../components/profile/RecruiterProfile/RecruiterProfilePage.jsx"
import { useAuth } from "../logic/context/AuthContext.jsx"
import { useEffect } from "react"
import { useProfile } from "../logic/context/profileContext.jsx"

export default function ProfilePage(){
  const { ...state  } = useAuth()
  const {fetchUser  } = useProfile()
  

  useEffect(() => {
      fetchUser();
    }, []);

 
    return<>
    <ProfileLayout>
      {state.user?.role == "jobSeeker" ? <JobSeekerProfilePage/>  : state.user?.role == "recruiter" ? <RecruiterProfilePage/> : null }
    
    </ProfileLayout>
    </>
}