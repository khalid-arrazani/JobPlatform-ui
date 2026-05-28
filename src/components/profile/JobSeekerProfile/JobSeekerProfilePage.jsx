import "./ProfileJoobSeeker.css"

import Header from "./header.jsx"
import AboutMeCard from "./AboutMeCard.jsx"
import TopSkillsCard from "./TopSkillsCard.jsx"
import ExperienceCard from "./experiencesCard.jsx";
import EducationCard from "./EducationCard.jsx";
import SocialLinksCard from "./SocialLinksCard"
import { useContext , useEffect } from "react";

import { getMe } from "../../../logic/api/profile/GetMe.jsx";

import { ProfileContext } from "../../../logic/context/profileContext.jsx";

export default function MyProfilePage() {

    const { dispatch } = useContext(ProfileContext);


useEffect(() => {

  const fetchUser = async () => {

    try {

      const data =
        await getMe();

      dispatch({
        type: "LOGIN",
        payload: data,
      });

    } catch (error) {

      console.log(
        error.response?.data
      );

    }
  };

  fetchUser();

}, []);


  return (
    <>
     
    
       <div className="par1" >

        <div style={{height:"25vh"}}>
          <Header/>
        </div>
        <div style={{height:"maxContent",display:"flex",padding:10}}>

          <div style={{display:"flex",flexDirection:"column",alignItems:"end",width:"50%"}}>

            <AboutMeCard/>
            <ExperienceCard/>

          </div>
          <div style={{
            width:"50%"}}>
            <TopSkillsCard/>
            <EducationCard/>
            <SocialLinksCard/>

          </div>
        </div>

       </div>






    </>
  );
}
