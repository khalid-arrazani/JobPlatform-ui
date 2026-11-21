import {
  Avatar,
  Box,
  Card,
  Chip,
  IconButton,
  Stack,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

import { millify } from "millify";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toggleSaveJob } from "../../../../logic/api/job/Job";
export default function ListJobsSaved({ savedJobs }) {
  const navigate = useNavigate();

  const openJob = async (e) => {
    // navigate(`/Dashboard/Jobs/Details/${e}`);
    console.log(e);
  };

  return (
    <>
      <Box
        sx={{
          height: "70%",
          overflow: "auto",
          boxSizing: "border-box",
          pt: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {
        savedJobs?.jobs?.map((job) => {
          const [loading, setLoading] = useState(false);
          const [saved, setSaved] = useState(true);

          const saveJob = async () => {
            const jobId = job._id;
            setLoading(true);
            try {
              const savejobs = await toggleSaveJob({
                jobId,
              });
              setSaved(savejobs.saved);
            } catch (error) {
              console.log(error.response?.data.message);
            } finally {
              setLoading(false);
            }
          };

          return (
            <Card
              key={job._id}
              sx={{
                py: 1.5,
                px: 2,
                borderRadius: "10px",
                border: "1px solid #d1d1d1c5",
                boxShadow: "none",
                mb: 2,
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.11)",
                  transform: "translateY(-2px)",
                },
                minHeight: "9rem",
                mr: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* Left Side */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                  }}
                >
                  <Avatar
                    src={job?.createdBy?.companyLogo?.url}
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "18px",
                      background: "linear-gradient(135deg, #9333EA, #3B82F6)",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      p: 1,
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "#0F172A",
                      }}
                    >
                      {job?.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.3,
                        color: "#64748B",
                        fontSize: "0.9rem",
                      }}
                    >
                      {job?.createdBy?.companyName}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      sx={{ mt: 1 }}
                    >
                      <Chip
                        size="small"
                        label={job?.workMode}
                        sx={{
                          bgcolor: "#F8FAFC",
                          borderRadius: "8px",
                        }}
                      />

                      <Chip
                        size="small"
                        label={job?.jobType}
                        sx={{
                          bgcolor: "#F8FAFC",
                          borderRadius: "8px",
                        }}
                      />

                      <Chip
                        size="small"
                        label={`${millify(job?.minSalary)} - ${millify(job?.maxSalary)} ${job?.salaryCurrency} / ${job?.salaryPeriod}`}
                        sx={{
                          bgcolor: "#F8FAFC",
                          borderRadius: "8px",
                        }}
                      />
                    </Stack>

                    <Typography
                      sx={{
                        mt: 2,
                        fontSize: "0.75rem",
                        color: "#94A3B8",
                      }}
                    >
                      {formatDistanceToNow(new Date(job?.createdAt), {
                        addSuffix: true,
                      })}
                    </Typography>
                  </Box>
                </Box>

                {/* Save Button */}
                <Box
                  size="small"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 1.5,
                    minWidth: 280,
                  }}
                >
                  {/* Save Icon */}
                  <IconButton sx={{ p: 0.1 }} onClick={saveJob}>
                    {loading ? (
                      <CircularProgress
                        enableTrackSlot
                        size="30px"
                        aria-label="Loading…"
                      />
                    ) : saved ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        id="Bookmark-Remove-Fill--Streamline-Rounded-Fill-Material"
                        height="28"
                        width="28"
                      >
                        <desc>
                          Bookmark Remove Fill Streamline Icon:
                          https://streamlinehq.com
                        </desc>
                        <path
                          fill="#921f9b"
                          d="M16 6.625c-0.2125 0 -0.3906 -0.07235 -0.53425 -0.217 -0.14385 -0.1445 -0.21575 -0.32365 -0.21575 -0.5375 0 -0.21365 0.0719 -0.39135 0.21575 -0.533 0.14365 -0.14165 0.32175 -0.2125 0.53425 -0.2125h4.5c0.2125 0 0.39065 0.07235 0.5345 0.217 0.14365 0.1445 0.2155 0.32365 0.2155 0.5375 0 0.21365 -0.07185 0.39135 -0.2155 0.533 -0.14385 0.14165 -0.322 0.2125 -0.5345 0.2125h-4.5ZM12 18l-4.9 2.1c-0.5 0.21665 -0.975 0.177 -1.425 -0.119 -0.45 -0.29585 -0.675 -0.7145 -0.675 -1.256V4.375c0 -0.4125 0.1469 -0.765665 0.44075 -1.0595 0.29365 -0.293665 0.64675 -0.4405 1.05925 -0.4405h7.3c0.225 0 0.39375 0.1 0.50625 0.3 0.1125 0.2 0.1021 0.4 -0.03125 0.6 -0.18335 0.316665 -0.31665 0.65 -0.4 1 -0.08335 0.35 -0.125 0.71665 -0.125 1.1 0 1.11665 0.35835 2.09165 1.075 2.925 0.71665 0.83335 1.60835 1.34165 2.675 1.525 0.15 0.02215 0.2844 0.0361 0.40325 0.04175 0.11865 0.0055 0.23425 0.00825 0.34675 0.00825 0.2 0 0.375 0.06625 0.525 0.19875 0.15 0.13235 0.225 0.2994 0.225 0.50125v7.65c0 0.5415 -0.225 0.96015 -0.675 1.256 -0.45 0.296 -0.925 0.33565 -1.425 0.119L12 18Z"
                          stroke-width="0.5"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        id="Bookmark-Add-Fill--Streamline-Rounded-Fill-Material"
                        height="28"
                        width="28"
                        style={{
                          background: "#800676e7",
                          borderRadius: "50%",
                          padding: "0.1rem",
                        }}
                      >
                        <desc>
                          Bookmark Add Fill Streamline Icon:
                          https://streamlinehq.com
                        </desc>
                        <path
                          fill="#fff"
                          d="M17.5 6.625h-1.5c-0.2125 0 -0.3906 -0.07235 -0.53425 -0.217 -0.14385 -0.1445 -0.21575 -0.32365 -0.21575 -0.5375 0 -0.21365 0.0719 -0.39135 0.21575 -0.533 0.14365 -0.14165 0.32175 -0.2125 0.53425 -0.2125h1.5v-1.5c0 -0.2125 0.07235 -0.390665 0.217 -0.5345 0.1445 -0.143665 0.32365 -0.2155 0.5375 -0.2155 0.21365 0 0.39135 0.071835 0.533 0.2155 0.14165 0.143835 0.2125 0.322 0.2125 0.5345v1.5h1.5c0.2125 0 0.39065 0.07235 0.5345 0.217 0.14365 0.1445 0.2155 0.32365 0.2155 0.5375 0 0.21365 -0.07185 0.39135 -0.2155 0.533 -0.14385 0.14165 -0.322 0.2125 -0.5345 0.2125h-1.5v1.5c0 0.2125 -0.07235 0.3906 -0.217 0.53425 -0.1445 0.14385 -0.32365 0.21575 -0.5375 0.21575 -0.21365 0 -0.39135 -0.0719 -0.533 -0.21575 -0.14165 -0.14365 -0.2125 -0.32175 -0.2125 -0.53425v-1.5ZM12 18l-4.9 2.1c-0.5 0.21665 -0.975 0.177 -1.425 -0.119 -0.45 -0.29585 -0.675 -0.7145 -0.675 -1.256V4.375c0 -0.4125 0.1469 -0.765665 0.44075 -1.0595 0.29365 -0.293665 0.64675 -0.4405 1.05925 -0.4405h7.3c0.225 0 0.39375 0.1 0.50625 0.3 0.1125 0.2 0.1021 0.4 -0.03125 0.6 -0.18335 0.316665 -0.31665 0.65 -0.4 1 -0.08335 0.35 -0.125 0.71665 -0.125 1.1 0 1.11665 0.35835 2.09165 1.075 2.925 0.71665 0.83335 1.60835 1.34165 2.675 1.525 0.15 0.02215 0.2844 0.0361 0.40325 0.04175 0.11865 0.0055 0.23425 0.00825 0.34675 0.00825 0.2 0 0.375 0.06625 0.525 0.19875 0.15 0.13235 0.225 0.2994 0.225 0.50125v7.65c0 0.5415 -0.225 0.96015 -0.675 1.256 -0.45 0.296 -0.925 0.33565 -1.425 0.119L12 18Z"
                          stroke-width="0.5"
                        ></path>
                      </svg>
                    )}
                  </IconButton>

                  {/* Skills */}
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    justifyContent="flex-end"
                  >
                    {job?.skills?.slice(0, 3).map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: "#F8F5FF",
                          color: "#64748B",
                          borderRadius: "999px",
                          height: "34px",

                          "& .MuiChip-label": {
                            px: 1.2,
                            fontSize: "0.75rem",
                          },
                        }}
                      />
                    ))}
                  </Stack>

                  {/* Buttons */}
                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button
                    onClick={()=>{openJob(job._id)}}
                      variant="outlined"
                      size="small"
                      sx={{
                        minWidth: 130,
                        height: 40,
                        borderRadius: "12px",
                        textTransform: "none",
                        fontWeight: 500,
                        borderColor: "#E2E8F0",
                        color: "#475569",

                        "&:hover": {
                          borderColor: "#CBD5E1",
                          bgcolor: "#fff",
                        },
                      }}
                    >
                      View Details
                    </Button>

                    
                  </Stack>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
