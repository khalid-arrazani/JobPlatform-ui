import { Card, Box, Typography, Chip, IconButton } from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";

import EditIcon from "@mui/icons-material/Edit";
import HiringFocusModal from "./HiringFocusModal ";
import { useEffect, useState } from "react";
import { useProfile } from "../../../logic/context/profileContext";

export default function HiringFocusCard() {
  const { ...state } = useProfile();

  const [hiringTypes, setHiringTypes] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    setHiringTypes(state.user?.profile?.hiring_Focus?.hiring_Types || []);
    setRoles(state.user?.profile?.hiring_Focus?.roles_I_hire_for || []);
  }, [state.user?.profile]);

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
          width: "46vw",
          borderRadius: "1rem",
          p: "1rem",
          background: "#fff",
          boxShadow: "0 0.4rem 1.5rem rgba(0,0,0,0.06)",
          mx: 1,
          mt: 1,
          boxSizing: "border-box",
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
              onClick={() => setOpen(true)}
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

         {hiringTypes?.length === 0 ? (
          <Box
            sx={{
              border: "dashed 1px #ddd ",
              height: "15rem",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
              width: "100%",
            }}
          >
            <Box
              sx={{
                height: "7.5rem",
                width: "7.5rem",
                bgcolor: "#fdedff75",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                id="Share-Link--Streamline-Core"
                height={"50%"}
          width={"50%"}
              >
                <desc>
                  {
                    "\n    Share Link Streamline Icon: https://streamlinehq.com\n  "
                  }
                </desc>
                <g id="share-link--share-transmit">
                  <path
                    id="Vector"
                    stroke="#403df1cd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.76 6 4.48 -2.25"
                    strokeWidth={0.5}
                  />
                  <path
                    id="Vector_2"
                    stroke="#403df1cd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.76 8 4.48 2.25"
                    strokeWidth={0.5}
                  />
                  <path
                    id="Vector_3"
                    fill="#403df1cd"
                    d="M2.75 9.25a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={0.5}
                  />
                  <path
                    id="Vector_4"
                    fill="#403df1cd"
                    d="M11.25 13.5a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={0.5}
                  />
                  <path
                    id="Vector_5"
                    fill="#403df1cd"
                    d="M11.25 5a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={0.5}
                  />
                  <path
                    id="Vector_6"
                    stroke=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.75 9.25a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={0.5}
                  />
                  <path
                    id="Vector_7"
                    stroke=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 13.5a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={0.5}
                  />
                  <path
                    id="Vector_8"
                    stroke=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 5a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={0.5}
                  />
                </g>
              </svg>
            </Box>

            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: 600,
                fontFamily: "system-ui",
                color: "#040213da",
              }}
            >
              No social links added yet.
            </Typography>

            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "monospace",
                color: "#040213da",
              }}
            >
              Schare your social links
            </Typography>
          </Box>
        ) : (
          <>
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
        </>
        )}
   

        




      </Card>
    </>
  );
}
