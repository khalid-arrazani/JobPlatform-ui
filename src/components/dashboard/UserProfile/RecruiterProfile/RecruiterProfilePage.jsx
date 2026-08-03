import "./ProfileRecruiter.css";

import Header from "./header.jsx";
import RecruiterStatsCard from "./RecruiterStatsCard.jsx";
import CompanyInformationCard from "./CompanyInformationCard.jsx";
import AboutMeCard from "./AboutMeCard.jsx";
import HiringFocusCard from "./HiringFocusCard.jsx";
import QuickStatsCard from "./QuickStatsCard.jsx";
import SocialLinksCard from "./SocialLinksCard.jsx";







export default function RecruiterProfilePage({data}) {

    

  return (
    <>
   
      <div className="par1">
        <div style={{ height: "25vh" }}>
          <Header data={data}  />
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
            <AboutMeCard data={data} />


            <RecruiterStatsCard data={data} />


            <SocialLinksCard data={data} />


            <QuickStatsCard data={data} />

          </div>

          <div
            style={{
              width: "50%",
            }}
          >
            <CompanyInformationCard data={data}  />
            
            <HiringFocusCard data={data}  />
          </div>
        </div>
      </div>
    </>
  );
}
