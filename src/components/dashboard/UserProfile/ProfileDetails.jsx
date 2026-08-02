
// import RecruiterProfilePage from "./RecruiterProfile/RecruiterProfilePage"

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BringProfileByIdJs, BringProfileByIdR } from "../../../logic/api/profile/GetMe";

// import MyProfilePage from "./JobSeekerProfile/JobSeekerProfilePage"

export default function ProfileDetails (){

    const { ProfileId , Role } = useParams();

    console.log(ProfileId , Role );

    useEffect(() => {
    
        const fetchUser = async () => {
          try {
            let data  
            Role == "jobSeeker" ? data = await BringProfileByIdJs(ProfileId) :  Role == "recruiter" ? data = await BringProfileByIdR(ProfileId) : null
            console.log(data);
          } catch (error) {

            console.log(error.response?.data); 
            
          } 
        };
      }, []);

    return <>
     
    </>
}