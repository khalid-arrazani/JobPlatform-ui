import { Box } from "@mui/material";

import Navbar from "../components/dashboard/Navbar5.jsx";
import { useProfile } from "../logic/context/profileContext.jsx";
import { useEffect } from "react";
import { getMeJS, getMeR } from "../logic/api/profile/GetMe.jsx";
import { getMeUser } from "../logic/api/user/user.jsx";

export default function DashboardLayout({ children, part, setPart }) {
  const { dispatch, ...state } = useProfile();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      try {
        let data;
        const user = await getMeUser();
        if (user.role == "jobSeeker") {
          data = await getMeJS();
        } else if (user.role == "recruiter") {
          data = await getMeR();
        }
        dispatch({
          type: "PROFILE",
          payload: data,
        });

        console.log(data);
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
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#e8e8e8",
        padding: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "3rem",
          background: "#eedcef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom:"solid 2px #b3afaf3e",
        
        }}
      >
        <Navbar part={part} setPart={setPart} />
      </Box>

      {children}
    </Box>
  );
}
