
// import RecruiterProfilePage from "./RecruiterProfile/RecruiterProfilePage"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BringProfileByIdJs, BringProfileByIdR } from "../../../logic/api/profile/GetMe";

import MyProfilePage from "./JobSeekerProfile/JobSeekerProfilePage"

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
   <MyProfilePage data={data} />


     
    </>
}