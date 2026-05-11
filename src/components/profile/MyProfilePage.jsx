import "./Profile.css";
import Header from "./header.jsx"
import AboutMeCard from "./AboutMeCard.jsx"
import TopSkillsCard from "./TopSkillsCard.jsx"
import ExperienceCard from "./experiencesCard.jsx";

export default function MyProfilePage() {
  return (
    <>
     
    
       <div className="par" style={{}}>

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
          </div>
        </div>

       </div>






    </>
  );
}
