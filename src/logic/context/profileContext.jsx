import {
  createContext,
  useReducer,
} from "react";

import { profileReducer } from "./reducer/ProfileReducer";

export const ProfileContext=
  createContext();

const initialState = {
  user: null,
};

export default function ProfileProvider({
  children,
}) {
  const [state, dispatch] =
    useReducer(
      profileReducer,
      initialState
    );

    console.log("this is initialState",state);


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