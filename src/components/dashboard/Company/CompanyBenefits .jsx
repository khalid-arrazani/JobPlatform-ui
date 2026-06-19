import { Grid, Card, Typography, Box } from "@mui/material";

// Icons
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SchoolIcon from "@mui/icons-material/School";

const CompanyBenefits = () => {
  const benefits = [
    {
      title: "Health Insurance",
      icon: <HealthAndSafetyIcon />,
      color: "#1976d2",
    },
    {
      title: "Good Salary",
      icon: <AttachMoneyIcon />,
      color: "#2e7d32",
    },
    {
      title: "Remote Work",
      icon: <LaptopMacIcon />,
      color: "#0288d1",
    },
    {
      title: "Paid Vacation",
      icon: <FlightTakeoffIcon />,
      color: "#f57c00",
    },
    {
      title: "Flexible Hours",
      icon: <ScheduleIcon />,
      color: "#9c27b0",
    },
    {
      title: "Training & Courses",
      icon: <SchoolIcon />,
      color: "#455a64",
    },
  ];

  return (
    <Card sx={{ p: 2, borderRadius: "12px",mt:2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        Company Benefits
      </Typography>

      <Grid container spacing={2}>
        {benefits.map((item, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: 2,
                backgroundColor: `${item.color}15`,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <Box sx={{ color: item.color }}>{item.icon}</Box>

              <Typography variant="body2" fontWeight="bold">
                {item.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default CompanyBenefits;