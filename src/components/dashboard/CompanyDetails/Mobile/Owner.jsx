import { Box,  Typography, Chip, Avatar } from "@mui/material";

 
import { HiOutlineShieldCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
 

export default function Owner ({CompanyInfo}){
  const navigate = useNavigate();

    return <>
    <Box
            sx={{
              height: "100%",
              width: "100%",
               
              right: "0",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
              borderRadius: "10px",
        p: 1.5,
      
        bgcolor: "#fff",
            }}
          >
            <Box
              sx={{
                height: "5rem",
                width: "15rem",
                boxSizing: "border-box",
                display: "flex",
                gap: 1.5,
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  height: "5rem",
                  width: "5rem",
                  border: "solid 1px #ebebeb",
                  cursor: "pointer",
                  transition: "0.1s",
                  transformOrigin: "center",
                  ":hover": { height: "5.1rem", width: "5.1rem" },
                }}
                onClick={ ()=> navigate(`/Dashboard/Profile/Details/${CompanyInfo?.owner?._id}/recruiter`)}
                src={CompanyInfo?.owner?.ProfileImage?.url}
              />

              <Box
                sx={{
                  height: "100%",
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Chip
                  size="small"
                  sx={{
                    borderRadius: "5px",
                    color: "#df76ff",
                    bgcolor: "#e5e5e569",
                    width: "fit-Content",
                  }}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <HiOutlineShieldCheck />

                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontFamily: "cursive",
                          fontSize: "0.7rem",
                          color: "#020214c2",
                        }}
                      >
                        Company Owner
                      </Typography>
                    </Box>
                  }
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontFamily: "monospace",
                    fontSize: "1rem",
                    color: "#020214e2",
                  }}
                >
                  {CompanyInfo?.owner?.fullName}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontFamily: "monospace",
                    fontSize: "0.8rem",
                    color: "#252526f2",
                  }}
                >
                  Founder & CEO
                </Typography>
              </Box>
            </Box>
          </Box>
    </>
}