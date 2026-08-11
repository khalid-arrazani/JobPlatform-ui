import { createContext, useReducer, useContext, useState, useEffect } from "react";

import { profileReducer } from "./reducer/ProfileReducer";
import { getMeUser } from "../api/user/user";
import { useAuth } from "./AuthContext";
import { getMeJS, getMeR } from "../api/profile/GetMe";

export const ProfileContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
  isLoadingUptadeProfile: false,
  reloadListJob: false,
  reloadCompany: 0,
  isLoadingCompany: false,
};

export const useProfile = () => {
  return useContext(ProfileContext);
};

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const { dispatch: dis } = useAuth();

  console.log(state);
  
  const fetchUser = async () => {
    try {
      let data;
      const user = await getMeUser();

      dis({
        type: "GET-USER",
        payload: user,
      });

      if (user.role == "jobSeeker") {
        data = await getMeJS();
      } else if (user.role == "recruiter") {
        data = await getMeR();
      }
      
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

  useEffect(()=>{
    fetchUser()
  },[])

  const [aboutOpen, setAboutOpen] = useState(false);
  const [skillOpen, setSkillOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  return (
    <ProfileContext.Provider
      value={{
        ...state,
        dispatch,

        aboutOpen,
        setAboutOpen,

        skillOpen,
        setSkillOpen,

        educationOpen,
        setEducationOpen,

        experienceOpen,
        setExperienceOpen,

        socialOpen,
        setSocialOpen,
        fetchUser,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
