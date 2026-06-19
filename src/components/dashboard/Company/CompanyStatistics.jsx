import { Grid, Card, Typography, Box } from "@mui/material";

// Icons
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkIcon from "@mui/icons-material/Work";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";

const CompanyStatistics = () => {
  const stats = {
    totalJobs: 12,
    activeJobs: 5,
    totalApplicants: 148,
    newApplicants: 23,
    hired: 7,
    avgViewsPerJob: 320,
  };

  const cardStyle = (color) => ({
    p: 2,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: 2,
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    backgroundColor: `${color}15`, // light background
  });

  return (
    <Card sx={{ p: 2, borderRadius: "12px" }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        Company Statistics
      </Typography>

   
        {/* Total Jobs */}
        <Box sx={{display:"flex" , flexWrap:"wrap",gap:2,justifyContent:"space-around"}}>
  
          <Card sx={cardStyle("#1976d2")}>
            <WorkOutlineOutlinedIcon sx={{ color: "#1976d2" }} />
            <Box>
              <Typography variant="body2">Total Jobs</Typography>
              <Typography variant="h6" fontWeight="bold">
                {stats.totalJobs}
              </Typography>
            </Box>
          </Card>
 

        {/* Active Jobs */}
        <Card sx={cardStyle("#2e7d32")}>
            <WorkIcon sx={{ color: "#2e7d32" }} />
            <Box>
              <Typography variant="body2">Active Jobs</Typography>
              <Typography variant="h6" fontWeight="bold">
                {stats.activeJobs}
              </Typography>
            </Box>
          </Card>


        {/* Applicants */}
          <Card sx={cardStyle("#0288d1")}>
            <PeopleAltIcon sx={{ color: "#0288d1" }} />
            <Box>
              <Typography variant="body2">Applicants</Typography>
              <Typography variant="h6" fontWeight="bold">
                {stats.totalApplicants}
              </Typography>
            </Box>
          </Card>


        {/* New Applicants */}
          <Card sx={cardStyle("#f57c00")}>
            <PersonAddAlt1Icon sx={{ color: "#f57c00" }} />
            <Box>
              <Typography variant="body2">New Applicants</Typography>
              <Typography variant="h6" fontWeight="bold">
                {stats.newApplicants}
              </Typography>
            </Box>
          </Card>
 

        {/* Hired */}
          <Card sx={cardStyle("#9c27b0")}>
            <CheckCircleIcon sx={{ color: "#9c27b0" }} />
            <Box>
              <Typography variant="body2">Hired</Typography>
              <Typography variant="h6" fontWeight="bold">
                {stats.hired}
              </Typography>
            </Box>
          </Card>
     

        {/* Views */}
          <Card sx={cardStyle("#455a64")}>
            <VisibilityIcon sx={{ color: "#455a64" }} />
            <Box>
              <Typography variant="body2">Avg Views / Job</Typography>
              <Typography variant="h6" fontWeight="bold">
                {stats.avgViewsPerJob}
              </Typography>
            </Box>
          </Card>
    </Box>

    </Card>

  );
};

export default CompanyStatistics;