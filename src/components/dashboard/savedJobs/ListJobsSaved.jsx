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

export default function ListJobsSaved({ savedJobs  }) {
 

  return (
    <>
      <Box
        sx={{
          height: "82%",
          overflow: "auto",
          boxSizing: "border-box",
          pt: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {savedJobs?.jobs?.map((job) => (
          <Card
            key={job.id}
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
                      label={` ${millify(savedJobs?.maxSalary)} - ${millify(savedJobs?.minSalary)} / ${savedJobs?.salaryCurrency}`}
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
                <IconButton
                  sx={{
                    color: "#8B5CF6",
                    alignSelf: "flex-end",

                    "&:hover": {
                      bgcolor: "#F5F3FF",
                    },
                  }}
                >
                  <BookmarkAddedOutlinedIcon />
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

                  <Button
                    size="small"
                    sx={{
                      minWidth: 130,

                      height: 40,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontWeight: 500,
                      color: "#fff",
                      boxShadow: "none",
                      background:
                        "linear-gradient(90deg, #A855F7 0%, #7C3AED 100%)",

                      "&:hover": {
                        boxShadow: "none",
                        background:
                          "linear-gradient(90deg, #9333EA 0%, #6D28D9 100%)",
                      },
                    }}
                  >
                    Apply Now
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Card>
        ))}

      
      </Box>
    </>
  );
}
