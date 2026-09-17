
import ProfileLayout from "../layouts/ProfileLayout.jsx"
import JobSeekerProfilePage from "../components/profile/JobSeekerProfile/JobSeekerProfilePage.jsx"
import RecruiterProfilePage from "../components/profile/RecruiterProfile/RecruiterProfilePage.jsx"
import { useAuth } from "../logic/context/AuthContext.jsx"
import MyProfilePage from "../components/profile/JobSeekerProfile/JobSeekerProfilePage.jsx"


export default function ProfilePage(){
  const { checkRole } = useAuth()

    return<>
    <ProfileLayout>
      {checkRole == "jobSeeker" ? <MyProfilePage/>  : checkRole == "recruiter" ? <RecruiterProfilePage/> : null }
    </ProfileLayout>
    </>
}