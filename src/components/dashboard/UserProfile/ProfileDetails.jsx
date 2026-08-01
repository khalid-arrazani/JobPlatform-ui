
// import RecruiterProfilePage from "./RecruiterProfile/RecruiterProfilePage"

import { useParams } from "react-router-dom";

// import MyProfilePage from "./JobSeekerProfile/JobSeekerProfilePage"

export default function ProfileDetails (){

    const { ProfileId , Role } = useParams();
    console.log(ProfileId , Role );
    return <>
     
    </>
}