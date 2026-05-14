import "./ProfileRecruiter.css"

import Header from "./header.jsx";
import RecruiterStatsCard from "./RecruiterStatsCard.jsx";
import CompanyInformationCard from "./CompanyInformationCard.jsx";
import AboutMeCard from "./AboutMeCard.jsx";
import HiringFocusCard from "./HiringFocusCard.jsx";

export default function RecruiterProfilePage() {
  return (
    <>
      <div className="par1">
        <div style={{ height: "25vh" }}>
          <Header />
        </div>

        <div style={{ height: "maxContent", display: "flex", padding: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              width: "50%",
            }}
          >
          <AboutMeCard />
          <HiringFocusCard />

          
          </div>

          <div
            style={{
              width: "50%",
            }}
          >
            <RecruiterStatsCard />
          <CompanyInformationCard/>

          </div>
        </div>
      </div>
    </>
  );
}
