
import ProfileLayout from "../layouts/ProfileLayout.jsx"
import JobSeekerProfilePage from "../components/profile/JobSeekerProfile/JobSeekerProfilePage.jsx"
import RecruiterProfilePage from "../components/profile/RecruiterProfile/RecruiterProfilePage.jsx"
import { useAuth } from "../logic/context/AuthContext.jsx"
import { useEffect } from "react"
import { getMeUser } from "../logic/api/user/user.jsx"
import { getMeJS, getMeR } from "../logic/api/profile/GetMe.jsx"
import { useProfile } from "../logic/context/profileContext.jsx"

export default function ProfilePage(){
  const {...state} = useAuth()
      const { dispatch } = useProfile();
    const { dispatch:dis} = useAuth();

  useEffect(() => {
      fetchUser();
    }, []);

     const fetchUser = async () => {
       
    
        try {
          let data;
          const user = await getMeUser();
    
          dis({
          type: "GET-USER",
          payload: user,
        });
        
          if (user.role == "jobSeeker") {
            data = await getMeJS();
          } else if (user.role == "recruiter") {
            data = await getMeR();
          }
    
          dispatch({
            type: "PROFILE",
            payload: data,
          });
    
          dispatch({});
        } catch (error) {
          console.log(error.response?.data);
        } finally {
          dispatch({
            type: "SET_LOADING",
            payload: false,
          });
        }
      };

    return<>
    <ProfileLayout>
      {state.user?.role == "jobSeeker" ? <JobSeekerProfilePage/>  : state.user?.role == "recruiter" ? <RecruiterProfilePage/> : null }
    
    </ProfileLayout>
    </>
}