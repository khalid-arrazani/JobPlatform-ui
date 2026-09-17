
import ProfileLayout from "../layouts/ProfileLayout.jsx"
 
import RecruiterProfilePage from "../components/profile/RecruiterProfile/RecruiterProfilePage.jsx"
import { useAuth } from "../logic/context/AuthContext.jsx"
 
import MyProfileJS from "../components/profile/JobSeekerProfile/JobSeekerProfilePage.jsx"


export default function ProfilePage(){
  const { checkRole } = useAuth()

    return<>
    <ProfileLayout>
      {checkRole == "jobSeeker" ? <MyProfileJS/>  : checkRole == "recruiter" ? <RecruiterProfilePage/> : null }
    </ProfileLayout>
    </>
}