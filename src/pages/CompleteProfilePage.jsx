import CompleteProfileLayout from "../layouts/CompleteProfileLayout.jsx";
import JobSeekerCPPage from "../components/Complete-Profile/For-JobSeeker/JobSeekerCPPage.jsx"
import RecruiterCPPage from "../components/Complete-Profile/For-Recruiter/RecruiterCPPage.jsx";

export default function CompleteProfile() {
  return (
    <CompleteProfileLayout>
      <RecruiterCPPage/>
    </CompleteProfileLayout>
  );
}