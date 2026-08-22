import { Box, Card, Avatar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function CardCompanies({ companies }) {


const navigate = useNavigate();

  const openCompany = async (e) => {
    const companyId = e.currentTarget.dataset.id;
    navigate(`/Dashboard/Company/${companyId}`);
  };

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
            width: "20%",
            border:"solid 1px #9e9e9e3d"
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
              {company.jobsCount} Jobs
            </Typography>

            <Typography fontWeight="bold" fontSize="0.75rem">
              {company.applicationsCount} Employees
            </Typography>
          </Box>

          {/* BUTTON */}
          <Button
            fullWidth
            variant="contained"
            data-id={company._id}
            onClick={openCompany} 
            sx={{
              mt: 1,
              borderRadius: "0.5rem",
              textTransform: "none",
              fontSize: "0.75rem",
              py: 0.3,
            }}
          >
            View Company
          </Button>
        </Card>
      ))}
    </>
  );
}
