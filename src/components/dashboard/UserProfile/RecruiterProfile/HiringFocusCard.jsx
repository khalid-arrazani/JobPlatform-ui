import { Card, Box, Typography, Chip } from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";

 
 
import { useEffect, useState } from "react";
 

export default function HiringFocusCard({data}) {

 

  const [hiringTypes , setHiringTypes]=useState([])
  const [roles , setRoles]=useState([])


  useEffect(()=>{
    setHiringTypes(data?.profile?.hiring_Focus?.hiring_Types ||[])
    setRoles(data?.profile?.hiring_Focus?.roles_I_hire_for ||[])
  },[data?.profile])



  return (
    <>
     
    
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
            
          </Typography>
        </Box>




       {hiringTypes?.length == 0 ? (
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
                id="Search-Visual--Streamline-Core"
                height={"50%"}
                width={"50%"}
              >
                <desc>
                  {
                    "\n    Search Visual Streamline Icon: https://streamlinehq.com\n  "
                  }
                </desc>
                <g id="search-visual">
                  <path
                    id="Vector"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5v2a1 1 0 0 1 -1 1h-2"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_2"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 0.5h2a1 1 0 0 1 1 1v2"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_3"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M0.5 3.5v-2a1 1 0 0 1 1 -1h2"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_4"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.5 13.5h-2a1 1 0 0 1 -1 -1v-2"
                    strokeWidth={1}
                  />
                  <path
                    id="Ellipse 1174"
                    fill="#ffffff"
                    d="M3.25 6.25a3 3 0 1 0 6 0 3 3 0 1 0 -6 0"
                    strokeWidth={1}
                  />
                  <path
                    id="Ellipse 1175"
                    fill="#ffffff"
                    d="M3.25 6.25a3 3 0 1 0 6 0 3 3 0 1 0 -6 0"
                    strokeWidth={1}
                  />
                  <path
                    id="Ellipse 1176"
                    stroke="#c70ed28c"
                    d="M3.25 6.25a3 3 0 1 0 6 0 3 3 0 1 0 -6 0"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector 2507"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.5 8.5 2 2"
                    strokeWidth={1}
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
              No Hiring Focus added yet.
            </Typography>

            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "monospace",
                color: "#040213da",
              }}
            >
              
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
