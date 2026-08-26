import { Card, Typography, Box, Chip, Button } from "@mui/material";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import EmptyOpenPositions from "./IfEmpty/EmptyOpenPositions";
import { useState } from "react";
import ModalOpenPositions from "./OpenPositionsModal/Modal";
 

export default function OpenPositionsCard({CompanyactiveJobs }) {
   const navigate = useNavigate();

   const [open , setOpen ] = useState(false);


  return (
    <>
      <Card
        sx={{
          width: "100%",
          height:"22.5rem",
          borderRadius: "15px",
          boxSizing: "border-box",
          p: 2.5,
          mt: 2,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <WorkOutlineOutlinedIcon color="primary" />
            <Typography
              sx={{
                fontFamily: "initial",
                color: "#090909d8",
                fontSize: "1.2rem",
              }}
            >
              Open Positions
            </Typography>
          </Box>

          <Button
            onClick={()=>{setOpen(true)}}
            size="small"
            sx={{
              color: "primary.main",
              fontSize: "0.75rem",
              cursor: "pointer",
            }}
          >
            View all jobs
          </Button>

          <ModalOpenPositions open={open}   setOpen={setOpen} />

        </Box>

        {/* <EmptyOpenPositions/> */}

        {/* Job Item */}
        {!CompanyactiveJobs?.length && <EmptyOpenPositions />}

        {CompanyactiveJobs?.slice(0,3).map((item) => (
          <Card
            key={item._id}
            onClick={()=>{ navigate(`/Dashboard/Jobs/Details/${item._id}`) }}
            sx={{
              boxSizing: "border-box",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
              px: 2.5,
              width: "100%",
              mb: 1.5,

              border: "1px solid #eef2f7",
              background: "#fff",

              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.1)",

              transition: "all .3s cubic-bezier(.4,0,.2,1)",

              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
                borderColor: "#dbeafe",
              },
              "&:active": {
                transform: "translateY(-10px)",
                boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
                borderColor: "#dbeafe",
                background: "#ebf9ff",
              },
              cursor: "pointer",
            }}
          >
            <Box>
              <Typography fontWeight={600}> {item.title} </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 0.5,
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{ fontSize: "0.9rem", color: "#666" }}
                />

                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#666",
                  }}
                >
                  {item.location}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: 2,boxSizing:"border-box",px:0.8 }}>
                <Chip
                  size="small"
                  sx={{
                    fontSize: "0.7rem",
                    borderRadius: "3px",
                    color: "#04b630",
                    bgcolor: "#e9fdef",
                  }}
                  label={item.jobType}
                />

                <Chip
                  size="small"
                  sx={{
                    fontSize: "0.7rem",
                    borderRadius: "3px",
                    color:
                      item.workMode === "Remote"
                        ? "#1976d2"
                        : item.workMode === "On-site"
                          ? "#d32f2f"
                          : item.workMode === "Hybrid"
                            ? "#9c27b0"
                            : "#555",

                    bgcolor:
                      item.workMode === "Remote"
                        ? "rgba(25, 118, 210, 0.1)"
                        : item.workMode === "On-site"
                          ? "rgba(211, 47, 47, 0.1)"
                          : item.workMode === "Hybrid"
                            ? "rgba(156,39,176,0.1)"
                            : "rgba(0,0,0,0.05)",
                  }}
                  label={item.workMode}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Chip
                  size="small"
                  label={formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                    })}
                  sx={{ fontSize: "0.7rem", borderRadius: "5px" }}
                ></Chip>

                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "0.9rem",
                    color: "#999",
                  }}
                />
              </Box>
            </Box>
          </Card>
        ))}

      </Card>
    </>
  );
}
