
// import RecruiterProfilePage from "./RecruiterProfile/RecruiterProfilePage"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BringProfileByIdJs, BringProfileByIdR } from "../../../logic/api/profile/GetMe";

import MyProfilePagejs from "./JobSeekerProfile/JobSeekerProfilePage"

import RecruiterProfilePage from "./RecruiterProfile/RecruiterProfilePage";
import LoadingPage from "./LoadingPage";

export default function ProfileDetails (){

    const [data , setData] = useState()
    const { ProfileId , Role } = useParams();
    const [loading , setLoading ] = useState(false)


    useEffect(() => {
       
       fetchUser()
      }, []);

       const fetchUser = async () => {
        setLoading(true)
          try {
            let info
            Role == "jobSeeker" ? info = await BringProfileByIdJs(ProfileId) :  Role == "recruiter" ? info = await BringProfileByIdR(ProfileId) : null
            setData(info)
            
          } catch (error) {

            console.log(error.response);

          } finally{setLoading(false)}
        };

        
console.log(data);
    return <>


  {loading ? <LoadingPage/> : ( Role == "jobSeeker" ? <MyProfilePagejs data={data} /> :  Role == "recruiter" ? <RecruiterProfilePage data={data} /> :null )}

  
   
   


     
    </>
}