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


    const [aboutOpen , setAboutOpen ] = useState(false)
    const [skillOpen , setSkillOpen ] = useState(false)
    const [educationOpen , setEducationOpen ] = useState(false)
    const [experienceOpen , setExperienceOpen ] = useState(false)
    const [socialOpen , setSocialOpen ] = useState(false)

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