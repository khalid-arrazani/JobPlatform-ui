import "./ProfileRecruiter.css";

import Header from "./header.jsx";
import RecruiterStatsCard from "./RecruiterStatsCard.jsx";
import CompanyInformationCard from "./CompanyInformationCard.jsx";
import AboutMeCard from "./AboutMeCard.jsx";
import HiringFocusCard from "./HiringFocusCard.jsx";
import QuickStatsCard from "./QuickStatsCard.jsx";
import SocialLinksCard from "./SocialLinksCard.jsx";


import { useEffect } from "react";

import { getMeR } from "../../../logic/api/profile/GetMe.jsx";
import { useProfile } from "../../../logic/context/profileContext.jsx";
import LoadingPage from "./LoadingPage.jsx";



export default function RecruiterProfilePage() {

    const { dispatch, ...state } = useProfile();
  
    useEffect(() => {
  
      const fetchUser = async () => {
        dispatch({
          type: "SET_LOADING",
          payload: true,
        });
        try {
          const data = await getMeR();
          dispatch({
            type: "PROFILE",
            payload: data,
          });
        } catch (error) {
          console.log(error.response?.data);
        } finally {
          dispatch({
            type: "SET_LOADING",
            payload: false,
          });
        }
      };
      fetchUser();
    }, []);

    console.log(state.user);

  return (
    <>
    {state.isLoading ? <LoadingPage/> : 
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
            <RecruiterStatsCard />
            <SocialLinksCard />
            <QuickStatsCard />
          </div>

          <div
            style={{
              width: "50%",
            }}
          >
            <CompanyInformationCard />
            
            <HiringFocusCard />
          </div>
        </div>
      </div>}
    </>
  );
}
