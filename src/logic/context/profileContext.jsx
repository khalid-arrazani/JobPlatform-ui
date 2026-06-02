import {
  createContext,
  useReducer,
  useContext
} from "react";

import { profileReducer } from "./reducer/ProfileReducer";

export const ProfileContext=
  createContext();

const initialState = {
  user: null,
  isLoading: false,
  isLoadingUptadeProfile:false
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

  return (
    <ProfileContext.Provider
      value={{
        ...state,
        dispatch,
      }}


    >
      {children}
    </ProfileContext.Provider>
  );
}