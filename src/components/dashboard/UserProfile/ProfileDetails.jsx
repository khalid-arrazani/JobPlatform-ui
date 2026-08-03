
// import RecruiterProfilePage from "./RecruiterProfile/RecruiterProfilePage"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BringProfileByIdJs, BringProfileByIdR } from "../../../logic/api/profile/GetMe";

import MyProfilePagejs from "./JobSeekerProfile/JobSeekerProfilePage"

import RecruiterProfilePage from "./RecruiterProfile/RecruiterProfilePage";

export default function ProfileDetails (){

    const [data , setData] = useState()

    const { ProfileId , Role } = useParams();


    useEffect(() => {
    
       fetchUser()
      }, []);

       const fetchUser = async () => {
          try {
            let info
            Role == "jobSeeker" ? info = await BringProfileByIdJs(ProfileId) :  Role == "recruiter" ? info = await BringProfileByIdR(ProfileId) : null


            setData(info)
            
          } catch (error) {

            console.log(error.response);

          } 
        };

        
console.log(data);
    return <>

    
  {Role == "jobSeeker" ? <MyProfilePagejs data={data} /> :  Role == "recruiter" ? <RecruiterProfilePage data={data} /> :null}
   
   


     
    </>
}