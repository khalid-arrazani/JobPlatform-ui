import CompleteProfileLayout from "../layouts/CompleteProfileLayout.jsx";
import JobSeekerCPPage from "../components/Complete-Profile/For-JobSeeker/JobSeekerCPPage.jsx"
import RecruiterCPPage from "../components/Complete-Profile/For-Recruiter/RecruiterCPPage.jsx";

export default function CompleteProfilePage() {
  return (
    <CompleteProfileLayout>
      <RecruiterCPPage/>
    </CompleteProfileLayout>
  );
}