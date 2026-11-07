import { Card, Typography, Box } from "@mui/material";

// Icons
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import WorkIcon from "@mui/icons-material/Work";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { ChartColumn } from "lucide-react";

const CompanyStatistics = ({ CompanyInfo }) => {
  const stats = {
    totalJobs: CompanyInfo?.totalJobs || 0,
    activeJobs: CompanyInfo?.totalActiveJobs || 0,
    totalApplicants: CompanyInfo?.applicants || 0,
    newApplicants: CompanyInfo?.newApplicants || 0,
    hired: CompanyInfo?.hired || 0,
    avgViewsPerJob: CompanyInfo?.companyViews || 0,
  };

  const cardStyle = (color) => ({
    p: 1,
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    backgroundColor: `${color}15`,
  });

  const titel = {
    fontFamily: "",
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "10px",
        p: 1.5,
        boxSizing: "border-box",
        bgcolor: "#fff",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: "8px" }}>
        <ChartColumn size={"1.2rem"} color="#66a8f4" />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontFamily: "monospace",
            color: "#0c031fb2",
            fontSize: "1rem",
          }}
        >
          Company Statistics
        </Typography>
      </Box>

      {/* Total Jobs */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
              borderColor: "#dbeafe",
            },

            height: "fit-content",
          }}
        >
          <Card sx={cardStyle("#1976d2")}>
            <WorkOutlineOutlinedIcon
              sx={{ color: "#1976d2", fontSize: "1.4rem" }}
            />
            <Box>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
                Total Jobs
              </Typography>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
                {stats.totalJobs}
              </Typography>
            </Box>
          </Card>
        </Box>

        {/* Active Jobs */}
        <Box
          sx={{
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
              borderColor: "#dbeafe",
            },
            height: "fit-content",
          }}
        >
          <Card sx={cardStyle("#2e7d32")}>
            <WorkIcon sx={{ color: "#2e7d32", fontSize: "1.4rem" }} />
            <Box>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
                Active Jobs
              </Typography>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
                {stats.activeJobs}
              </Typography>
            </Box>
          </Card>
        </Box>

        {/* Applicants */}
        <Box
          sx={{
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
              borderColor: "#dbeafe",
            },
            height: "fit-content",
          }}
        >
          <Card sx={cardStyle("#0288d1")}>
            <PeopleAltIcon sx={{ color: "#2e7d32", fontSize: "1.4rem" }} />
            <Box>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
                Applicants
              </Typography>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
                {stats.totalApplicants}
              </Typography>
            </Box>
          </Card>
        </Box>

        {/* New Applicants */}
        <Box
          sx={{
         
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
              borderColor: "#dbeafe",
            },
            height: "fit-content",
          }}
        >
          <Card sx={cardStyle("#f57c00")}>
            <PersonAddAlt1Icon sx={{ color: "#f57c00", fontSize: "1.4rem" }} />
            <Box>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
                New Applicants
              </Typography>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
                {stats.newApplicants}
              </Typography>
            </Box>
          </Card>
        </Box>

        {/* Hired */}
        <Box
          sx={{
    
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
              borderColor: "#dbeafe",
            },
      
            height: "fit-content",
          }}
        >
          <Card sx={cardStyle("#9c27b0")}>
            <CheckCircleIcon sx={{ color: "#9c27b0", fontSize: "1.4rem" }} />
            <Box>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
                Hired
              </Typography>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
                {stats.hired}
              </Typography>
            </Box>
          </Card>
        </Box>

        {/* Views */}
        <Box
          sx={{

            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
              borderColor: "#dbeafe",
            },
        
            height: "fit-content",
          }}
        >
          <Card sx={cardStyle("#455a64")}>
            <VisibilityIcon sx={{ color: "#455a64", fontSize: "1.4rem" }} />
            <Box>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
                Avg Views / Job
              </Typography>
              <Typography sx={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
                {stats.avgViewsPerJob}
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyStatistics;
