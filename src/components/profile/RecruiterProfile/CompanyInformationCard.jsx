import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function CompanyInformationCard() {
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
      <CardContent sx={{ p: "0.5rem !important" }}>
        {/* Title */}
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            mb: "1.2rem",
          }}
        >
          Company Information
        </Typography>

        {/* Company Name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            mb: "1rem",
          }}
        >
          <BusinessIcon
            sx={{
              color: "#5b21b6",
              fontSize: "1.3rem",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "0.72rem",
                color: "#777",
              }}
            >
              Company Name
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.92rem",
              }}
            >
              NexHire
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: "0.8rem" }} />

        {/* Industry */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            mb: "1rem",
          }}
        >
          <ApartmentIcon
            sx={{
              color: "#5b21b6",
              fontSize: "1.3rem",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "0.72rem",
                color: "#777",
              }}
            >
              Industry
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.92rem",
              }}
            >
              Technology & Recruitment
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: "0.8rem" }} />

        {/* Website */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            mb: "1rem",
          }}
        >
          <LanguageIcon
            sx={{
              color: "#5b21b6",
              fontSize: "1.3rem",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "0.72rem",
                color: "#777",
              }}
            >
              Website
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.92rem",
              }}
            >
              www.nexhire.com
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: "0.8rem" }} />

        {/* Location */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
          }}
        >
          <LocationOnIcon
            sx={{
              color: "#5b21b6",
              fontSize: "1.3rem",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "0.72rem",
                color: "#777",
              }}
            >
              Location
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.92rem",
              }}
            >
              Taroudant, Morocco
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}