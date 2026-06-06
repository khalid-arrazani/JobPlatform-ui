import { Card, Box, Typography, Chip, IconButton } from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";

import EditIcon from "@mui/icons-material/Edit";
import HiringFocusModal from "./HiringFocusModal ";
import { useEffect, useState } from "react";
import { useProfile } from "../../../logic/context/profileContext";

export default function HiringFocusCard() {

  const {...state} = useProfile()

  const [hiringTypes , setHiringTypes]=useState([])
  const [roles , setRoles]=useState([])


  useEffect(()=>{
    setHiringTypes(state.user?.profile?.hiring_Focus?.hiring_Types ||[])
    setRoles(state.user?.profile?.hiring_Focus?.roles_I_hire_for ||[])
  },[state.user?.profile])




  const [open, setOpen] = useState(false);

  return (
    <>
      <HiringFocusModal
        open={open}
  setOpen={setOpen}
  hiringTypes={hiringTypes}
  setHiringTypes={setHiringTypes}
  roles={roles}
  setRoles={setRoles}
  />
    
      <Card
        sx={{
          width: "44vw",
          borderRadius: "1rem",
          p: "1rem",
          background: "#fff",
          boxShadow: "0 0.4rem 1.5rem rgba(0,0,0,0.06)",
          m: 1,
        }}
      >
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
            <WorkIcon />
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
            Hiring Focus
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

        {/* Hiring Types */}

        <Typography
          sx={{
            fontSize: "0.9rem",
            fontWeight: 600,
            mb: "0.9rem",
          }}
        >
          Hiring Types:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.7rem",
            mb: "1.5rem",
          }}
        >
          {hiringTypes.map((item, index) => (
            <Chip
              key={index}
              label={item}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",

                p: ".5rem",
                borderRadius: ".5rem",

                border: "1px solid #ececec",
                background: "#fcfcff",

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-0.15rem)",
                  boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.06)",
                },
              }}
            />
          ))}
        </Box>

        {/* Roles */}
        <Typography
          sx={{
            fontSize: "0.9rem",
            fontWeight: 600,
            mb: "0.9rem",
          }}
        >
          Roles I hire for:
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.7rem",
          }}
        >
          {roles.map((role, index) => (
            <Chip
              key={index}
              label={role}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",

                p: ".5rem",
                borderRadius: ".5rem",

                border: "1px solid #ececec",
                background: "#fcfcff",

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-0.15rem)",
                  boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.06)",
                },
              }}
            />
          ))}
        </Box>
      </Card>
    </>
  );
}
