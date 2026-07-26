import { DataGrid } from "@mui/x-data-grid";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Applicant</TableCell>
        <TableCell>Job Post</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Applied On</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {applications.map((application) => (
        <TableRow key={application._id}>
          <TableCell>{application.name}</TableCell>
          <TableCell>{application.job}</TableCell>
          <TableCell>{application.status}</TableCell>
          <TableCell>{application.date}</TableCell>
          <TableCell>...</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
      </div>
    </>
  );
}
