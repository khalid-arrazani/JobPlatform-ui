import { Card, Box, Typography, IconButton } from "@mui/material";

import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";

import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

import EditIcon from "@mui/icons-material/Edit";

import ExperienceModal from "./ExperienceModal";
import { useEffect, useState } from "react";
import { updateProfileR } from "../../../logic/api/profile/GetMe";
import { useAuth } from "../../../logic/context/AuthContext";
import { useProfile } from "../../../logic/context/profileContext";

export default function RecruiterStatsCard() {

  const [open, setOpen] = useState(false);



    const { dispatch, ...state } = useProfile();
  
        const { setSnackBar } = useAuth();
  
    //---------------------------------
    const [experience, setExperience] = useState("Lead");


    useEffect(() => {
      const profile = state.user?.profile;
      if (!profile) return;

      setExperience(profile.experienceLevel || "");

    }, [state.user?.profile]);
  
  
    const handleSave = async () => {
  
      dispatch({
          type: "SET_LOADING_UPDATE_PROFILE",
          payload: true,
        });
      setSnackBar({
          open: true,
          message: "Education Update Seccesfuly",
          severity: "success",
        });
      try {
        const data = await updateProfileR({
          experienceLevel:experience
        });
        dispatch({
          type: "PROFILE",
          payload: data,
        });
        setOpen(false);
        
      } catch (error) {
        setSnackBar({
          open: true,
          message: error.response?.data?.message,
          severity: "error",
        });
      }finally {
          dispatch({
            type: "SET_LOADING_UPDATE_PROFILE",
            payload: false,
          });
        }
    };



  const stats = [
    {
      icon: <WorkIcon />,
      title: "Experience",
      value: experience,
    },

    {
      icon: <CalendarMonthIcon />,
      title: "Joined NexHire",
      value: "May 2024",
    },

    {
      icon: <DescriptionOutlinedIcon />,
      title: "Jobs Posted",
      value: "24",
    },

    {
      icon: <GroupOutlinedIcon />,
      title: "Candidates Hired",
      value: "18",
    },
  ];
  

  return (
    
    <Card
        sx={{
        width: "46vw",
        borderRadius: "1rem",
        p: "1rem",
        background: "#fff",
        boxShadow: "0 0.4rem 1.5rem rgba(0,0,0,0.06)",
        mx: 1,
        mt: 1,
        boxSizing:"border-box"
      }}
    >
      <ExperienceModal 
      open={open}
      setOpen={setOpen}

      />
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          mb: "1rem",
        }}
      >
        <Box
          sx={{
            width: "2.4rem",
            height: "2.4rem",
            borderRadius: "0.8rem",
            background: "#f5f3ff",
            color: "#5b21b6",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <QuizTwoToneIcon />
        </Box>

        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Professional Overview
          <IconButton
          onClick={()=>setOpen(true)}
            sx={{
              background: "#160a7e00",
              color: "#6e6e6e",

              "&:hover": {
                background: "#37373849",
              },
              width: "2.5rem",
              height: "2.5rem",
              p: 1,
            }}
          >
            <EditIcon sx={{ width: "100%", m: 0 }} />
          </IconButton>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "1rem",
        }}
      >
        {stats.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",

              p: "1rem",
              borderRadius: "1rem",

              border: "1px solid #ececec",
              background: "#fcfcff",

              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-0.15rem)",
                boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.06)",
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: "3rem",
                height: "3rem",
                borderRadius: "0.9rem",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background: "#f5f3ff",
                color: "#5b21b6",

                "& svg": {
                  fontSize: "1.4rem",
                },
              }}
            >
              {item.icon}
            </Box>

            {/* Text */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  color: "#777",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  mt: "0.1rem",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
