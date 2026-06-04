import {
  createContext,
  useReducer,
  useContext,
  useState
} from "react";

import { profileReducer } from "./reducer/ProfileReducer";

export const ProfileContext=
  createContext();

const initialState = {
  user: null,
  isLoading: false,
  isLoadingUptadeProfile:false,
};

export const useProfile = () => {
  return useContext(
    ProfileContext
  );
};

export default function ProfileProvider({
  children,
}) {


  const [state, dispatch] =
    useReducer(
      profileReducer,
      initialState
    );


    const [aboutOpen , setAboutOpen ] = useState()
    const [skillOpen , setSkillOpen ] = useState()
    const [educationOpen , setEducationOpen ] = useState()
    const [experienceOpen , setExperienceOpen ] = useState()
    const [socialOpen , setSocialOpen ] = useState()

  return (
    <ProfileContext.Provider
      value={{
        ...state,
        dispatch,

        aboutOpen ,
         setAboutOpen,

        skillOpen , 
         setSkillOpen ,

        educationOpen ,
         setEducationOpen ,

        experienceOpen ,
         setExperienceOpen ,

        socialOpen ,
         setSocialOpen  
      }}


    >
      {children}
    </ProfileContext.Provider>
  );
}