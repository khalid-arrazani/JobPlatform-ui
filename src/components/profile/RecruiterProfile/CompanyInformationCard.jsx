import {
  Card,
  Box,
  Typography,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function CompanyInformationCard() {
  const companyData = [
    {
      icon: <BusinessIcon />,
      title: "Company Name",
      value: "NexHire",
    },

    {
      icon: <ApartmentIcon />,
      title: "Industry",
      value: "Technology & Recruitment",
    },

    {
      icon: <LanguageIcon />,
      title: "Website",
      value: "www.nexhire.com",
    },

    {
      icon: <LocationOnIcon />,
      title: "Location",
      value: "Taroudant, Morocco",
    },
  ];

  return (
    <Card
      sx={{
    width: "44vw",
    borderRadius: "1rem",
    p: "1rem",
    background: "#fff",
    boxShadow: "0 0.4rem 1.5rem rgba(0,0,0,0.06)",
    m:1
      }}
    >
      {/* Header */}
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          mb: "1.2rem",
          color: "#111",
        }}
      >
        Company Information
      </Typography>

      {/* Content */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2,1fr)",
          },
          gap: "1rem",
        }}
      >
        {companyData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",

              p: "1rem",

              border: "1px solid #efefef",
              borderRadius: "1rem",

              background: "#fcfcff",

              transition: "0.3s ease",

              "&:hover": {
                transform: "translateY(-0.15rem)",
                boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.05)",
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                minWidth: "3rem",
                height: "3rem",

                borderRadius: "0.9rem",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background: "#f3f0ff",
                color: "#5b21b6",

                "& svg": {
                  fontSize: "1.35rem",
                },
              }}
            >
              {item.icon}
            </Box>

            {/* Text */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.72rem",
                  color: "#888",
                  mb: "0.15rem",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "#111",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}