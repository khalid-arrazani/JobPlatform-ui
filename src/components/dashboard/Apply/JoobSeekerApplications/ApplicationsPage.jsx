import {
  Card,
  Typography,
  Box,
  Button,
  Collapse,
  Avatar,
  Chip,
} from "@mui/material";

import { Pagination } from "@mui/material";

import Header from "./header";
import { useEffect, useState } from "react";
import { getSavedJobs } from "../../../../logic/api/job/Job";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function ApplicationsJs() {
  const [savedJobs, setSavedJobs] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (event, value) => {
    SavedJobs(value);
  };

  useEffect(() => {
    SavedJobs();
  }, []);

  const SavedJobs = async (value) => {
    setLoading(true);
    try {
      const SavedJobs = await getSavedJobs(value);

      setSavedJobs(SavedJobs);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "92.4vh",
          bgcolor: "#dcdbdb",
          display: "flex",
        }}
      >
        {/* left side header and SavedJobsList */}
        <Box
          sx={{
            width: "70vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            borderRight: "solid 0.5px #6160601c",
            boxSizing: "border-box",
            px: 5,
          }}
        >
          <Header />

          <Box
            sx={{
              width: "100%",
              height: "60%",
              boxSizing: "border-box",
              placeItems: "center",
            }}
          >
            <Card
              sx={{
                height: "6.5rem",
                width: "95%",
                my: 1,
                boxShadow: "none",
                border: "solid 1px #cfcececa",
                boxSizing: "border-box",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "6.5rem",
                  boxSizing: "border-box",
                  p: 1,
                  borderRight: "solid 1px #ddd",
                }}
              >
                <Avatar
                  src="https://imgs.search.brave.com/1NjKNCJLYkxjPLrKnWVPWI9kpKaExy3iB_VnIqxTbJc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw"
                  sx={{ width: "100%", height: "100%", borderRadius: "10px" }}
                />
              </Box>

              <Box sx={{ height: "100%", flex: 1, display: "flex" }}>
                <Box
                  sx={{
                    height: "100%",
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 0.5,
                    pl: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      fontFamily: "ui-monospace",
                    }}
                  >
                    Frontend Developer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      fontFamily: "monospace",
                      color: "#02020db4",
                    }}
                  >
                    Google • Zurich , Switzerland
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      fontFamily: "monospace",
                      color: "#02020db4",
                      mb: 0.5,
                    }}
                  >
                    Applied on May 18,2025
                  </Typography>
                </Box>


                <Box
                  sx={{
                    height: "100%",
                    width: "50%",
                 
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"space-between"
                  }}
                >
                  <Chip
                    label={"• Interviewing"}
                    sx={{
                      fontSize: "1rem",
                      borderRadius: "8px",
                      fontFamily: "system-ui",
                      color: "#094911ca",
                      bgcolor: "#c0ffc8",
                      fontWeight: 600,
                    }}
                  />

                  <Box  sx={{display:"flex",width:"40%",justifyContent:"space-between",alignItems:"center"}} >
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        fontFamily: "monospace",
                        color: "#02020db4",
                        mb: 0.5,
                      }}
                    >
                      May 18,2025
                    </Typography>
                    <MoreVertIcon />
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>

          <Pagination
            onChange={handleChange}
            count={savedJobs?.totalPages}
            sx={{
              mt: "auto",
              alignSelf: "center",
              mb: 2,
            }}
          />
        </Box>

        {/* right side profile card  */}
        <Box
          sx={{
            width: "30vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
      </Box>
    </>
  );
}
