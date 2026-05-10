import "./Profile.css";
import Header from "./header.jsx"
import AboutMeCard from "./AboutMeCard"
import TopSkillsCard from "./TopSkillsCard"

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
        <div class="Profilediv6">6</div>
      </div>
    </>
  );
}
