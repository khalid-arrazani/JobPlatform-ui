import {
  Avatar,
  Box,
  Card,
  Chip,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

import { millify } from "millify";
import { formatDistanceToNow } from "date-fns";

export default function ListJobsSaved({ savedJobs }) {
  return (
    <>
      {savedJobs?.jobs?.map((job) => (
        <Box
          sx={{
            bgcolor: "#fff",
            height: "auto",
            width: "100%",
            border: "1px solid #ddddddb9",
            borderRadius: "10px",
            display: "flex",
            boxSizing: "border-box",
            boxShadow: "none",
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
            },
            my: 1,
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
             
              height: "auto",
              borderBottom: "1px solid #ddddddb9",
              width: "100%",
              display: "flex",
              boxSizing: "border-box",
              boxShadow: "none",
            }}
          >
            {/* Avatar */}
            <Box
              sx={{
                height: "100%",
                width: "6rem",
                display: "flex",
                justifyContent: "center",
                boxSizing: "border-box",
                py: "0.7rem",
              }}
            >
              <Avatar
                src={job.createdBy?.companyLogo?.url}
                sx={{
                  width: "4.5rem",
                  height: "4.5rem",
                  borderRadius: "6px",
                  border: "1px solid #ebebebca",
                }}
              />
            </Box>

            <Box
              sx={{
                height: "auto",
                flex: 1,
                boxSizing: "border-box",
                py: "0.7rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontFamily: "monospace",
                  color: "#120328da",
                  position: "relative",
                }}
              >
                {job?.title || "-----------------------"}
                {/* MoreVertIcon - Menu  */}
              </Typography>

              <Box sx={{ display: "flex", gap: 0.8, alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    fontFamily: "monospace",
                    color: "#02020d7a",
                  }}
                >
                  {job?.location || "---------------"}
                </Typography>
              </Box>

              <Stack direction="row" spacing={1}>
                <Chip
                  label={job?.jobType}
                  size="small"
                  sx={{
                    fontSize: "0.88rem",
                    height: "22px",
                    bgcolor: "#d8f3ff",
                    borderRadius: "5px",
                    color: "#013578bf",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                />

                <Chip
                  label={job?.workMode}
                  size="small"
                  sx={{
                    fontSize: "0.88rem",
                    height: "22px",
                    bgcolor: "#f6d8ff",
                    color: "#6f0779ba",
                    borderRadius: "5px",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                />
              </Stack>
            </Box>
          </Box>

          {/* fotor */}

          <Box
            sx={{
               
              height: "auto",

              width: "100%",

              display: "flex",
              boxSizing: "border-box",
              boxShadow: "none",
              flexDirection: "column",
            }}
          >
            

            <Box
              sx={{
                height: "3rem",
                width: "100%",
                 
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Chip
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      id="Calendar-Mark--Streamline-Solar"
                      height="18"
                      width="18"
                      style={{ marginBottom: "0.2rem" }}
                    >
                      <desc>
                        Calendar Mark Streamline Icon: https://streamlinehq.com
                      </desc>
                      <g id="Line Duotone/Time/Calendar Mark">
                        <path
                          id="Vector"
                          stroke="#737373"
                          stroke-linecap="round"
                          d="M7 4V2.5"
                          stroke-width="1.5"
                        ></path>
                        <path
                          id="Vector_2"
                          stroke="#737373"
                          stroke-linecap="round"
                          d="M17 4V2.5"
                          stroke-width="1.5"
                        ></path>
                        <path
                          id="Vector_3"
                          stroke="#737373"
                          stroke-linecap="round"
                          d="M2 9h20"
                          stroke-width="1.5"
                        ></path>
                        <path
                          id="Vector_4"
                          stroke="#000000a2"
                          d="M2 12c0 -3.77124 0 -5.65685 1.17157 -6.82843C4.34315 4 6.22876 4 10 4h4c3.7712 0 5.6569 0 6.8284 1.17157C22 6.34315 22 8.22876 22 12v2c0 3.7712 0 5.6569 -1.1716 6.8284C19.6569 22 17.7712 22 14 22h-4c-3.77124 0 -5.65685 0 -6.82843 -1.1716C2 19.6569 2 17.7712 2 14v-2Z"
                          stroke-width="1.5"
                        ></path>
                        <path
                          id="Vector_5"
                          stroke="#000000b6"
                          d="M16.5 18c0.8284 0 1.5 -0.6716 1.5 -1.5s-0.6716 -1.5 -1.5 -1.5 -1.5 0.6716 -1.5 1.5 0.6716 1.5 1.5 1.5Z"
                          stroke-width="1.5"
                        ></path>
                      </g>
                    </svg>

                    {formatDistanceToNow(new Date(job.createdAt), {
                      addSuffix: true,
                    })}
                  </Box>
                }
                sx={{
                  fontSize: "0.9rem",
                  height: "30px",
                  width: "fit-Content",
                  bgcolor: "#e4e4e4",
                  color: "#515151",
                  fontWeight: 500,
                  borderRadius: "5px",
                  fontFamily: "monospace",
                }}
              />

              <Button
                // onClick={() => {
                //   setMyJobDetailsModal(true);
                // }}
                sx={{
                  height: "30px",
                  color: "#5911b1",
                  display: "flex",
                  border: "1px solid #5911b1d4",
                  borderRadius: "8px",
                  alignItems: "center",
                  gap: 1.2,
                  textTransform: "none",
                  fontFamily: "monospace",
                  fontWeight: 600,
                }}
              >
                View Job
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="Line-Arrow-Right-1--Streamline-Sharp-Remix"
                  height="24"
                  width="24"
                >
                  <desc>
                    Line Arrow Right 1 Streamline Icon: https://streamlinehq.com
                  </desc>
                  <g id="Remix/Interface Essential/line-arrow-right-1--arrow-right-keyboard">
                    <path
                      id="Union"
                      fill="#5911b1d4"
                      fill-rule="evenodd"
                      d="m23.1173 11.1162 -8 -7.99999 -1.7678 1.76777 5.8661 5.86612 -19.214623437 0 0 2.5 19.214623437 0 -5.8661 5.8661 1.7678 1.7678 8 -8 0.8839 -0.8839 -0.8839 -0.8839Z"
                      clip-rule="evenodd"
                      stroke-width="0.5"
                    ></path>
                  </g>
                </svg>
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}
