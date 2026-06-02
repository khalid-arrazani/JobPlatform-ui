import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import {  IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

import ExperiencesModal from "./experiencesModal";
import { useState , useContext } from "react";
import { useProfile } from "../../../logic/context/profileContext";

export default function ExperienceCard() {
  const [open,setOpen] = useState(false)

  const {...state} = useProfile()

  const [experiences,setExperiences] = useState()

  useContext(()=>{
    setExperiences(state.user?.profile?.experience)
  },[state.user?.profile])
  

  return (

    <Card
      sx={{
        borderRadius: "1rem",
        p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #ffffff 0%, #f7f7ff 100%)",
        width: "44vw",m:1
      }}
    >
      <ExperiencesModal
       open={open}
       setOpen={setOpen}
       experiences={experiences}
       setExperiences={setExperiences}
      />

      <CardContent sx={{ p: "0.75rem !important" }}>
        {/* Title */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            mb: "1rem",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >
          Experience
          <IconButton
          onClick={()=>setOpen(true)}
  sx={{
    background: "#160a7e00",
    color: "#6e6e6e",

    "&:hover": {
      background: "#37373849",
    },
    width:"2.5rem",
    height:"2.5rem",
    p:1
  }}
>
  <EditIcon sx={{width:"100%",m:0}} />
</IconButton>
          
        </Typography>

        {/* Experience Items */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {experiences.map((exp, index) => (
            <Box key={index}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                {exp.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.78rem",
                  color: "#6366f1",
                  fontWeight: 500,
                }}
              >
                {exp.company}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.72rem",
                  color: "#777",
                  mt: "0.2rem",
                }}
              >
                {exp.period}
              </Typography>

              {index !== experiences.length - 1 && (
                <Divider sx={{ mt: "0.8rem" }} />
              )}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}