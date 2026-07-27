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
      <div style={{ height: "98%", width: "100%", boxSizing: "border-box" }}>
        <TableContainer
          sx={{
            boxSizing: "border-box",
            height: "100%",
            borderBottom: "solid 1px #dddddd",
            px: 1,

            boxShadow: "none",
          }}
        >
          <Table
            sx={{
              boxSizing: "border-box",
              height: "99%",
              my: 1,

              px: 1,
            }}
          >
            <TableHead sx={{ border: "solid 1px #ddddddf9" }}>
              <TableRow sx={{ border: "solid 1px #221b1b00" }}>
                <TableCell>Applicant</TableCell>
                <TableCell>Job Position</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Applied On</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody
              sx={{ boxSizing: "border-box", border: "solid 1px #ddd" }}
            >
              {applications.map((application) => (
                <TableRow
                  onClick={() => handleClick(application.id)}
                  sx={{
                    height: "5rem",
                    p: 0,
                    "& .css-1dc80h3-MuiTableCell-root": {
                      p: 0,
                      boxSizing: "border-box",
                    },
                    "& .MuiTableCell-root ": { p: 0, boxSizing: "border-box" },
                  }}
                  key={application._id}
                >
                  <TableCell sx={{}}>
                    <Box
                      sx={{
                        height: "100%",
                        width: "80%",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        boxSizing: "border-box",
                      }}
                    >
                      <Avatar
                        sx={{ m: 1, height: "3.5rem", width: "3.5rem" }}
                      />

                      <Box sx={{
                        height: "100%",
                        width: "80%",
                        display: "flex",
                        boxSizing: "border-box",
                        flexDirection:"column",justifyContent:"center",gap:0.5
                      }}>
                        <Typography>{application.applicant} </Typography>
                        <Typography>{application.applicant} </Typography>
                      </Box>

                    </Box>
                  </TableCell>


                  <TableCell>{application.job}</TableCell>

                  <TableCell>{application.status}</TableCell>

                  <TableCell>{application.appliedOn}</TableCell>
                  <TableCell>---</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
