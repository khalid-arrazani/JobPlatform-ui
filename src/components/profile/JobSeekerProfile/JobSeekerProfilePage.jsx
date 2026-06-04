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

import { useEffect } from "react";

import { getMe } from "../../../logic/api/profile/GetMe.jsx";

import { useProfile } from "../../../logic/context/profileContext.jsx";

import LoadingPage from "./LoadingPage.jsx";



export default function MyProfilePage() {
  const { dispatch, ...state } = useProfile();

  console.log(state.isLoading);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      try {
        const data = await getMe();
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

  return (
    <>
      {state.isLoading ? (
        <LoadingPage />
      ) : (
        <div className="par1">
          <div style={{ height: "28vh" }}>
            <Header />
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
              <EmptyAboutCard />
              <ExperienceCard />
            </div>
            <div
              style={{
                width: "50%",
              }}
            >
              <TopSkillsCard />
              <EducationCard />
              <SocialLinksCard />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
