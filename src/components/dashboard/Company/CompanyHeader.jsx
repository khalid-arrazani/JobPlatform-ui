
import { Box, Card, Typography, Chip, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";




export default function CompanyHeader (){

    return <>
      <Box
          sx={{
            height: "46vh ",
            width: "100%",
            bgcolor: "#ffffff",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "65% ",
              width: "100%",
              bgcolor: "#544f4f",
              backgroundImage: `url(https://images.openai.com/static-rsc-4/PHTER0Rl3I33Op-D5zV-G2DiAvA8q7wWIyh26XkgQPQDLkaVy0ninCSxtw5D84s1R3QZ2RlIrTKyfqdScSXR0daTG49X5_ZoLulPPtadkou9hOtdjL9scDKcdLqAM07zM78smzlRZ8qulEA13D47BhrNhtWd9zjCWkC6DNX83nqnJ71glVmKZiVmMG64pN4f?purpose=fullsize)`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          ></Box>

          <Box
            sx={{
              height: "35% ",
              flex: 1,
              bgcolor: "#ffffff",
              pl: "13.5vw",
              position: "relative",
              pt: "0.2vh",
            }}
          >
            <Button
              variant="contained"
              startIcon={<EditOutlinedIcon />}
              sx={{
                position: "absolute",
                bottom: 20,
                right: 20,
                textTransform: "none",
                borderRadius: "5px",
                px: 2.5,
                border:"solid 1px #b9b9b959",
                color:"#434343",
                fontFamily:"sans-serif",
                fontWeight:500,
                py: 1,
                bgcolor: "#fdfdfd",
                boxShadow: "0 4px 12px rgba(203, 226, 249, 0.25)",
                "&:hover": {
                  bgcolor: "#e2f4fa",
                },
              }}
            >
              Edit Company Profile
            </Button>

            <Card
              sx={{
                height: "8.5rem ",
                width: "8.5rem",
                bgcolor: "#fffafa",
                position: "absolute",
                top: "-50%",
                left: "2%",
                borderRadius: "15px",
              }}
            >
              <img
                style={{ width: "100%" }}
                src="https://i.pinimg.com/1200x/2c/50/23/2c50234169fdba4edb9b3ae602b8feec.jpg"
                alt=""
                srcset=""
              />
            </Card>

            {/* Company Name */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "#2e2e2e",
                  fontFamily: "-apple-system",
                }}
              >
                Google
              </Typography>

              <VerifiedIcon
                sx={{
                  color: "#1a73e8",
                  fontSize: "1.3rem",
                }}
              />
            </Box>

            {/* Info Row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                mt: 0.3,
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <BusinessCenterOutlinedIcon
                  sx={{ fontSize: "1rem", color: "#666" }}
                />
                <Typography sx={{ fontSize: "0.85rem", color: "#555" }}>
                  Technology & Internet
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LocationOnOutlinedIcon
                  sx={{ fontSize: "1rem", color: "#666" }}
                />
                <Typography sx={{ fontSize: "0.85rem", color: "#555" }}>
                  Mountain View, USA
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <GroupsOutlinedIcon sx={{ fontSize: "1rem", color: "#666" }} />
                <Typography sx={{ fontSize: "0.85rem", color: "#555" }}>
                  190k+ Employees
                </Typography>
              </Box>
            </Box>

            {/* Website */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                mt: 1,
              }}
            >
              <Chip
                icon={<LanguageOutlinedIcon />}
                size="small"
                label="google.com"
                clickable
                sx={{
                  color: "#1a73e8",
                  fontWeight: 500,
                  bgcolor: "#f5f8ff",
                  border: "1px solid #dbe7ff",
                  "& .MuiChip-icon": {
                    color: "#666",
                    width: 0.15,
                  },
                  borderRadius: "5px",
                }}
              />
            </Box>
          </Box>
        </Box>

    </>
}