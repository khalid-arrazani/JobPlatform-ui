import { DataGrid } from "@mui/x-data-grid";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Typography,
  Container,
  Chip,
  Button,
} from "@mui/material";
import MenuApply from "./Menu";
import { useApply } from "../../../../logic/context/ApplyContext";

const applications = [
  {
    id: 1,
    applicant: "Khalid Arrazani",
    job: "Frontend Developer",
    status: "Pending",
    appliedOn: "Jul 26, 2026",
    experience: "2 Years",
    location: "Casablanca, Morocco",
  },
  {
    id: 2,
    applicant: "Sarah Johnson",
    job: "UI/UX Designer",
    status: "Under Review",
    appliedOn: "Jul 25, 2026",
    experience: "4 Years",
    location: "Berlin, Germany",
  },
  {
    id: 3,
    applicant: "Michael Brown",
    job: "Backend Developer",
    status: "Interview",
    appliedOn: "Jul 24, 2026",
    experience: "5 Years",
    location: "Toronto, Canada",
  },
  {
    id: 4,
    applicant: "Emma Wilson",
    job: "Mobile Developer",
    status: "Accepted",
    appliedOn: "Jul 23, 2026",
    experience: "3 Years",
    location: "London, UK",
  },
  {
    id: 5,
    applicant: "Ahmed Hassan",
    job: "DevOps Engineer",
    status: "Rejected",
    appliedOn: "Jul 22, 2026",
    experience: "6 Years",
    location: "Dubai, UAE",
  },
  {
    id: 6,
    applicant: "Sophia Martinez",
    job: "Product Designer",
    status: "Pending",
    appliedOn: "Jul 21, 2026",
    experience: "2 Years",
    location: "Madrid, Spain",
  },
  {
    id: 7,
    applicant: "David Lee",
    job: "Full Stack Developer",
    status: "Under Review",
    appliedOn: "Jul 20, 2026",
    experience: "7 Years",
    location: "Seoul, South Korea",
  },
];
import { formatDistanceToNow, format } from "date-fns";
const app = { status: "Under review" };

export default function ListGrid() {
  const { ...state } = useApply();

  const handleClick = (application) => {
    console.log(application);
  };

  console.log("....", state);

  return (
    <>
      <Box
        sx={{ height: "100%", width: "100%", px: 1, boxSizing: "border-box" }}
      >
        <Box
          sx={{
            height: "3.5rem",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            px: 2,
          }}
        >
          <Box
            sx={{
              width: "20%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              fontFamily: "system-ui",
              fontWeight: 600,
              color: "#02010e9c",
              fontSize: "0.9rem",
            }}
          >
            Applicant
          </Box>
          <Box
            sx={{
              width: "20%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              fontFamily: "system-ui",
              fontWeight: 600,
              color: "#02010e9c",
              fontSize: "0.9rem",
            }}
          >
            Job Post
          </Box>
          <Box
            sx={{
              width: "20%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              fontFamily: "system-ui",
              fontWeight: 600,
              color: "#02010e9c",
              fontSize: "0.9rem",
            }}
          >
            Status
          </Box>
          <Box
            sx={{
              width: "20%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              fontFamily: "system-ui",
              fontWeight: 600,
              color: "#02010e9c",
              fontSize: "0.9rem",
            }}
          >
            Applied On
          </Box>
          <Box
            sx={{
              width: "20%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              direction: "rtl",
              fontFamily: "system-ui",
              fontWeight: 600,
              color: "#02010e9c",
              fontSize: "0.9rem",
            }}
          >
            Actions
          </Box>
        </Box>

        <Box
          sx={{
            height: "83%",
            width: "100%",
            border: "solid 1px #ddd",
            borderRadius: "10px",
            overflow: "auto",
          }}
        >
          {state?.ListApply?.applications?.map((apply) => (
            <Box
              key={apply._id}
              sx={{
                height: "5.5rem",
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                px: 2,

                borderBottom: "solid 1px #ddd",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  bgcolor: "#f6fbff",
                },
              }}
            >
              <Box
                sx={{
                  width: "32%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  color: "#02010e9c",
                  fontSize: "0.9rem",
                  gap: 1.5,
                }}
              >
                <Avatar
                  src={apply.profile.ProfileImage.url}
                  sx={{ height: "3rem", width: "3rem" }}
                />

                <Box
                  sx={{
                    width: "auto",
                    height: "100%",
                    display: "flex",
                    fontFamily: "system-ui",
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                    gap: 0.2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "system-ui",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#020210df",
                    }}
                  >
                    {apply.profile.fullName}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "system-ui",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                    }}
                  >
                    {apply.applicant.email}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "system-ui",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                    }}
                  >
                    {apply.profile.location.slice(0, 20)}
                    {apply.profile.location.length > 20 ? "....." : null}{" "}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "20%",
                  height: "100%",
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "system-ui",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "#020210df",
                  }}
                >
                  {apply.job.title.slice(0, 26)}
                  {apply.job.title.length > 26 ? "....." : null}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "system-ui",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    color: "#6a6969",
                  }}
                >
                  {apply.job.jobType} • {apply.job.workMode}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "18%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  color: "#02010e9c",
                  fontSize: "0.9rem",
                }}
              >
                <Chip
                  label={`• ${apply.status}`}
                  sx={{
                    fontSize: "0.8rem",
                    alignItems: "center",
                    borderRadius: "8px",
                    fontFamily: "system-ui",
                    color:
                      apply?.status == "Pending"
                        ? "#F59E0B"
                        : apply?.status == "Accepted"
                          ? "#10B981"
                          : apply?.status == "Interview"
                            ? "#8B5CF6"
                            : apply?.status == "Rejected"
                              ? "#EF4444"
                              : apply?.status == "Under review"
                                ? "#3B82F6"
                                : null,

                    bgcolor:
                      apply?.status == "Pending"
                        ? "#FEF3C7"
                        : apply?.status == "Accepted"
                          ? "#D1FAE5"
                          : apply?.status == "Interview"
                            ? "# "
                            : apply?.status == "Rejected"
                              ? "#FEE2E2"
                              : apply?.status == "Under review"
                                ? "#DBEAFE"
                                : null,
                    fontWeight: 600,
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "13%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  color: "#02010e50",
                  fontSize: "0.9rem",
                }}
              >
                {format(new Date(apply?.createdAt), "MMM dd, yyyy")}
              </Box>
              <Box
                sx={{
                  width: "17%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  direction: "rtl",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  color: "#02010e9c",
                  fontSize: "0.9rem",
                  gap: 1,
                }}
              >
                <MenuApply JobId={apply?.job?._id} />

                <Button
                  sx={{
                    textTransform: "none",
                    fontSize: "0.8rem",
                    color: "#000000c3",
                    border: "#ddd 1px solid",
                    fontWeight: 600,
                    fontFamily: "system-ui",
                    bgcolor: "#fffefe",
                  }}
                >
                  View Profile
                </Button>


              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
