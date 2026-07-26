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
  const handleClick = (application) => {
    console.log(application);
  };
  return (
    <>
      <div style={{ height: "100%", width: "100%",boxSizing:"border-box" }}>
        <TableContainer component={Paper} sx={{boxSizing:"border-box",height:"100%",borderTop:"solid 1px #DDD",borderBottom:"solid 1px #DDD",px:1,borderRadius:0,boxShadow:"none"}}  >
            
          <Table sx={{boxSizing:"border-box",height:"99%",my:1,borderTop:"solid 1px #DDD",px:1,borderRadius:0}}>
            <TableHead sx={{ border :"solid 1px #DDD"}}>
              <TableRow>
                <TableCell sx={{border :"solid 1px #DDD"}} >Applicant</TableCell>
                <TableCell  sx={{border :"solid 1px #DDD"}}>Job Position</TableCell>
                <TableCell sx={{border :"solid 1px #DDD"}}>Experience</TableCell>
                <TableCell sx={{border :"solid 1px #DDD"}}>Location</TableCell>
                <TableCell sx={{border :"solid 1px #DDD"}}>Status</TableCell>
                <TableCell sx={{border :"solid 1px #DDD"}}>Applied On</TableCell>
                
              </TableRow>
            </TableHead>

            <TableBody  sx={{boxSizing:"border-box" }}>
              {applications.map((application) => (
                <TableRow
                  onClick={() => handleClick(application.id)}
                  sx={{mr:5,border :"solid 1px #DDD"}}
                  key={application._id}
                >
                  <TableCell sx={{border :"solid 1px #DDD"}} >{application.applicant}</TableCell>

                  <TableCell sx={{border :"solid 1px #DDD"}} >{application.job}</TableCell>
                  <TableCell sx={{border :"solid 1px #DDD"}} >{application.experience}</TableCell>
                  <TableCell sx={{border :"solid 1px #DDD"}} >{application.location}</TableCell>
                  <TableCell sx={{border :"solid 1px #DDD"}} >{application.status}</TableCell>
                  
                  <TableCell sx={{border :"solid 1px #DDD"}} >{application.appliedOn}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
