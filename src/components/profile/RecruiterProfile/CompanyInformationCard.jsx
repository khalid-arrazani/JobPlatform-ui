import { Card, Box, Typography,IconButton } from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import EditIcon from "@mui/icons-material/Edit";

import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";

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
        m: 1,
      }}
    >
      {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            mb: "1rem",
          }}
        >
          <Box
            sx={{
              width: "2.4rem",
              height: "2.4rem",
              borderRadius: "0.8rem",
              background: "#f5f3ff",
              color: "#5b21b6",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BusinessTwoToneIcon />
          </Box>

          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 700,
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Company Information
            <IconButton
              sx={{
                background: "#160a7e00",
                color: "#6e6e6e",

                "&:hover": {
                  background: "#37373849",
                },
                width: "2.5rem",
                height: "2.5rem",
                p: 1,
              }}
            >
              <EditIcon sx={{ width: "100%", m: 0 }} />
            </IconButton>
          </Typography>
        </Box>

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
