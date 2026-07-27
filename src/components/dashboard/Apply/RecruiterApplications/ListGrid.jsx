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
} from "@mui/material";

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
export default function ListGrid() {
  const handleClick = (application) => {
    console.log(application);
  };
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
          <Box
            sx={{
              height: "5.5rem",
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              px: 2,
              border: "solid 1px #ddd",
            }}
          >
            <Box
              sx={{
                width: "30%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                fontFamily: "system-ui",
                fontWeight: 600,
                color: "#02010e9c",
                fontSize: "0.9rem",
              }}
            >
              <Avatar sx={{ height: "3rem", width: "3rem" }} />
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
              Frontend Developer
            </Box>

            <Box
              sx={{
                width: "15%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                fontFamily: "system-ui",
                fontWeight: 600,
                color: "#02010e9c",
                fontSize: "0.9rem",
              }}
            >
              Under Review
            </Box>
            <Box
              sx={{
                width: "15%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                fontFamily: "system-ui",
                fontWeight: 600,
                color: "#02010e9c",
                fontSize: "0.9rem",
              }}
            >
              May 18,2025
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
              --------------
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
