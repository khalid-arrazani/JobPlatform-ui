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
              <Box
                sx={{
                  height: "fit-content",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  boxSizing:"border-box",pr:1

                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontFamily: "monospace",
                    color: "#120328da",
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                    width:"90%"
                  }}
                >
                  {job?.title || "-----------------------"}
                </Typography>


                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="Bookmark-Added--Streamline-Rounded-Material"
                  height="24"
                  width="24"
                   
                >
                  <desc>
                    Bookmark Added Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    fill="#7c1de9"
                    
                    d="m17.9 6.75 3.175 -3.175c0.14665 -0.15 0.32085 -0.225 0.5225 -0.225 0.20165 0 0.3775 0.075415 0.5275 0.22625 0.15 0.151 0.225 0.330165 0.225 0.5375 0 0.2075 -0.075 0.38625 -0.225 0.53625l-3.7 3.7c-0.15 0.15 -0.325 0.225 -0.525 0.225s-0.375 -0.075 -0.525 -0.225l-1.6 -1.6c-0.15 -0.15 -0.225 -0.32635 -0.225 -0.529 0 -0.20265 0.07175 -0.37765 0.21525 -0.525 0.1565 -0.14735 0.33865 -0.221 0.5465 -0.221 0.20765 0 0.3871 0.075 0.53825 0.225l1.05 1.05ZM12 18l-4.9 2.1c-0.5 0.21665 -0.975 0.177 -1.425 -0.119 -0.45 -0.29585 -0.675 -0.7145 -0.675 -1.256V4.375c0 -0.4 0.15 -0.75 0.45 -1.05 0.3 -0.3 0.65 -0.45 1.05 -0.45h6.5c0.2125 0 0.39065 0.072335 0.5345 0.217 0.14365 0.1445 0.2155 0.323665 0.2155 0.5375 0 0.213665 -0.07185 0.391335 -0.2155 0.533 -0.14385 0.141665 -0.322 0.2125 -0.5345 0.2125H6.5v14.35l5.5 -2.325 5.5 2.325v-7.6c0 -0.2125 0.07235 -0.39065 0.217 -0.5345 0.1445 -0.14365 0.32365 -0.2155 0.5375 -0.2155 0.21365 0 0.39135 0.07185 0.533 0.2155 0.14165 0.14385 0.2125 0.322 0.2125 0.5345v7.6c0 0.5415 -0.225 0.96015 -0.675 1.256 -0.45 0.296 -0.925 0.33565 -1.425 0.119L12 18Zm0 -13.625H6.5h7.25H12Z"
                    stroke-width="0.5"
                  ></path>
                </svg>
              </Box>
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

              <Chip
                size="small"
                label={`${millify(job?.minSalary)} - ${millify(job?.maxSalary)} ${job?.salaryCurrency} / ${job?.salaryPeriod}`}
                sx={{
                  fontSize: "0.8rem",
                  height: "22px",
                  bgcolor: "#d8ffded8",
                  color: "#077912ba",
                  borderRadius: "5px",
                  fontWeight: 600,
                  fontFamily: "monospace",
                  mt: 0.8,
                }}
              />
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
