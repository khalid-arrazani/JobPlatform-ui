import CompleteProfileLayout from "../layouts/CompleteProfileLayout.jsx";
import JobSeekerCPPage from "../components/Complete-Profile/For-JobSeeker/JobSeekerCPPage.jsx"
import RecruiterCPPage from "../components/Complete-Profile/For-Recruiter/RecruiterCPPage.jsx";
import { useAuth } from "../logic/context/AuthContext.jsx";
import { useEffect } from "react";
import { getMeUser } from "../logic/api/user/user.jsx";
import { useNavigate } from "react-router-dom";



export default function CompleteProfilePage() {

  const {dispatch , ...state} = useAuth()
 const navigate = useNavigate()
  

  useEffect(() => {
    
    const fetchUser = async () => {
      // dispatch({
      //   type: "COMPLETEPRPFILE",
      //   payload: true,
      // });
      try {
       const data = await getMeUser();

        if (data.isComplete){
          navigate("/profile")
        }
        dispatch({
          type: "COMPLETEPRPFILE",
          payload: data,
        });


        
        
      } catch (error) {

        console.log(error.response?.data);

      } finally {

        // dispatch({
        //   type: "COMPLETEPRPFILE",
        //   payload: false,
        // });
      }
    };
    fetchUser();
  }, []);


  return (
    <CompleteProfileLayout>
       {state.user?.role == "jobSeeker" ? <JobSeekerCPPage/>  : state.user?.role == "recruiter" ? <RecruiterCPPage/> : null }
    </CompleteProfileLayout>

  );
}