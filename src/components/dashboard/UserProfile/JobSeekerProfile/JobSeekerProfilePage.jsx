import "./ProfileJoobSeeker.css";

import Header from "./header.jsx";

import AboutMeCard from "./AboutMeCard.jsx";
import EmptyAboutCard from "./AboutMeEmptyCard.jsx";

import TopSkillsCard from "./TopSkillsCard.jsx";
import EmptySkillsCard from "./TopSkillsEmptyCard.jsx";

import ExperienceCard from "./experiencesCard.jsx";
import EmptyExperienceCard from "./ExperienceEmptyCard.jsx";

import EducationCard from "./EducationCard.jsx";
import EmptyEducationCard from "./EducationEmptyCard.jsx";

import SocialLinksCard from "./SocialLinksCard";
import EmptySocialLinksCard from "./SocialLinksEmptyCard.jsx";






export default function MyProfilePagejs({data}) {


 console.log(data);

  return (
    <>
     
        <div className="par1">
          <div style={{ height: "28vh" }}>


            <Header data={data} />


          </div>
          <div style={{ height: "maxContent", display: "flex", padding: 10 }}>


            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                width: "50%",
              }}
            >
              {data?.profile?.aboutMe.length !== 0  ? <AboutMeCard data={data} /> : <EmptyAboutCard /> }
              {data?.profile?.experience.length !== 0  ? <ExperienceCard data={data} /> : <EmptyExperienceCard/> }
            </div>



            <div
              style={{
                width: "50%",
              }}
            >
              {data?.profile?.skills.length !== 0  ? <TopSkillsCard  data={data} /> : <EmptySkillsCard /> }
              {data?.profile?.education.length !== 0  ? <EducationCard   data={data} /> : <EmptyEducationCard /> }
              {data?.profile?.socialLinks.length !== 0  ? <SocialLinksCard   data={data} /> : <EmptySocialLinksCard /> }
      
            </div>



          </div>
        </div>
     
    </>
  );
}
