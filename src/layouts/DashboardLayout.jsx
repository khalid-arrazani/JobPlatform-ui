import { Box } from "@mui/material";
import Navbar from "../components/dashboard/Navbar.jsx";
import { useProfile } from "../logic/context/profileContext.jsx";
import { useEffect } from "react";
import { getMeJS } from "../logic/api/profile/GetMe.jsx";

export default function DashboardLayout({ children, part, setPart }) {
  const { dispatch, ...state } = useProfile();
  
    useEffect(() => {
      const fetchUser = async () => {
        dispatch({
          type: "SET_LOADING",
          payload: true,
        });
        try {
          const data = await getMeJS();
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
        background: "#ebeaea",
        padding: 0,
      }}
    >
      <Navbar part={part} setPart={setPart} />

      {children}
    </Box>
  );
}
