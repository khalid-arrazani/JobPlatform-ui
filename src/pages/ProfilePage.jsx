
import ProfileLayout from "../layouts/ProfileLayout.jsx"

import { useAuth } from "../logic/context/AuthContext.jsx"
 
import MyProfileJS from "../components/profile/JobSeekerProfile/JobSeekerProfilePage.jsx"
import MyProfileR from "../components/profile/RecruiterProfile/RecruiterProfilePage.jsx"


export default function ProfilePage(){
  const { checkRole } = useAuth()

    return<>
    <ProfileLayout>
      {checkRole == "jobSeeker" ? <MyProfileJS/>  : checkRole == "recruiter" ? <MyProfileR/> : null }
    </ProfileLayout>
    </>
}