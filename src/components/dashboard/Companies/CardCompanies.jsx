import { Box, Card, Avatar, Typography, Button } from "@mui/material";

export default function CardCompanies({ companies }) {



  const company = [
    {
      name: "Google",
      image: "/google.png",
      location: "California, USA",
      jobs: "120 Jobs",
      employees: "10k+ Employees",
    },

    {
      name: "Microsoft",
      image: "/microsoft.png",
      location: "Washington, USA",
      jobs: "98 Jobs",
      employees: "10k+ Employees",
    },

    {
      name: "Amazon",
      image: "/amazon.png",
      location: "Seattle, USA",
      jobs: "150 Jobs",
      employees: "10k+ Employees",
    },

    {
      name: "Meta",
      image: "/meta.png",
      location: "California, USA",
      jobs: "75 Jobs",
      employees: "10k+ Employees",
    },

    {
      name: "Apple",
      image: "/apple.png",
      location: "Cupertino, USA",
      jobs: "63 Jobs",
      employees: "10k+ Employees",
    },

    {
      name: "Netflix",
      image: "/netflix.png",
      location: "Los Gatos, USA",
      jobs: "45 Jobs",
      employees: "5k+ Employees",
    },

    {
      name: "Spotify",
      image: "/spotify.png",
      location: "Stockholm, Sweden",
      jobs: "32 Jobs",
      employees: "1k+ Employees",
    },

    {
      name: "Airbnb",
      image: "/airbnb.png",
      location: "San Francisco, USA",
      jobs: "28 Jobs",
      employees: "5k+ Employees",
    },
  ];

  

  return (
    <>
      {companies?.JobsWithApply?.map((company) => (
        <Card
          key={company.name}
          sx={{
            borderRadius: "1rem",
            p: 1,
            height: "clamp(150px, 20vw, 140px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "0.3s",
            cursor: "pointer",

            "&:hover": {
              transform: "translateY(-0.2rem)",
              boxShadow: "0 0.4rem 1rem rgba(0,0,0,0.10)",
            },
            m: 1,
            width: "20%",
          }}
          style={{ minWidth: "190px", maxWidth: "250px" }}
        >
          {/* TOP */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar
              src={company.companyLogo.url}
              sx={{
                width: "2.5rem",
                height: "2.5rem",
              }}
            />

            <Box>
              <Typography fontWeight="bold" sx={{ fontSize: "0.95rem" }}>
                {company.name}
              </Typography>

              <Typography
                sx={{
                  opacity: 0.7,
                  fontSize: "0.7rem",
                }}
              >
                {company.headquarters}
              </Typography>
            </Box>
          </Box>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              mt: 0.6,
              opacity: 0.75,
              fontSize: "0.75rem",
              lineHeight: 1.4,
            }}
          >
            {company.industry.slice(0,60)}
            
          </Typography>

          {/* STATS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <Typography fontWeight="bold" fontSize="0.75rem">
              {company.jobs}
            </Typography>

            <Typography fontWeight="bold" fontSize="0.75rem">
              {company.employees}
            </Typography>
          </Box>

          {/* BUTTON */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 1,
              borderRadius: "0.5rem",
              textTransform: "none",
              fontSize: "0.75rem",
              py: 0.3,
            }}
          >
            View Jobs
          </Button>
        </Card>
      ))}
    </>
  );
}
