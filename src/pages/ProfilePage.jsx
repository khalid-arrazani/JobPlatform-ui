
import ProfileLayout from "../layouts/ProfileLayout.jsx"
import JobSeekerProfilePage from "../components/profile/JobSeekerProfile/JobSeekerProfilePage.jsx"
import RecruiterProfilePage from "../components/profile/RecruiterProfile/RecruiterProfilePage.jsx"
import { useAuth } from "../logic/context/AuthContext.jsx"


export default function ProfilePage(){
  const { checkRole } = useAuth()

    return<>
    <ProfileLayout>
      {checkRole == "jobSeeker" ? <JobSeekerProfilePage/>  : checkRole == "recruiter" ? <RecruiterProfilePage/> : null }
    </ProfileLayout>
    </>
}