import "./Profile.css";
import Header from "./header.jsx"
import AboutMeCard from "./AboutMeCard.jsx"
import TopSkillsCard from "./TopSkillsCard.jsx"
import ExperienceCard from "./experiencesCard.jsx";

export default function MyProfilePage() {
  return (
    <>
      <div class="Profileparent">
        <div class="Profilediv1">
          <Header/>
        </div>

        <div class="Profilediv2">
          <AboutMeCard/>
        </div>


        <div class="Profilediv3">
        <TopSkillsCard/>
        </div>

        <div class="Profilediv4">4</div>
        <div class="Profilediv5">5</div>
        <div class="Profilediv6">
          <ExperienceCard/>
        </div>
      </div>
    </>
  );
}
