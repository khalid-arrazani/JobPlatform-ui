import {  Card, Typography, Box } from "@mui/material";

// Icons
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SchoolIcon from "@mui/icons-material/School";

import { CircleCheckBig } from "lucide-react";

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
    <Card sx={{ p: 2, borderRadius: "12px", mt: 2 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: "bold",
          fontFamily: "initial",
          color: "#090909d8",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CircleCheckBig color="#389af5" />
        Company Benefits
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "space-around",
        }}
      >
        {benefits.map((item, index) => (
          <Box key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: "12px",
                display: "flex",
                transition:"0.5s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
                  borderColor: "#dbeafe",
                },
                alignItems: "center",
                gap: 2,
                backgroundColor: `${item.color}15`,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                cursor:"pointer",
                border:"solid 0.5px #8d8d8d1f"
              }}
            >
              <Box sx={{ color: item.color }}>{item.icon}</Box>

              <Typography variant="body2" fontWeight="bold">
                {item.title}
              </Typography>
            </Card>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default CompanyBenefits;
