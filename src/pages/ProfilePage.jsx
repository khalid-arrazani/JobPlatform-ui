
import ProfileLayout from "../layouts/ProfileLayout.jsx"
import JobSeekerProfilePage from "../components/profile/JobSeekerProfile/JobSeekerProfilePage.jsx"
import RecruiterProfilePage from "../components/profile/RecruiterProfile/RecruiterProfilePage.jsx"

export default function ProfilePage(){

    return<>
    <ProfileLayout>
      <JobSeekerProfilePage/>
    </ProfileLayout>
    </>
}