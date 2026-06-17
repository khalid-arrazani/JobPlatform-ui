import { Box, Typography, Avatar, LinearProgress, Stack } from "@mui/material";

export default function CompanyHeader() {
  return<>


     <Box
      sx={{
        width: "100%",
        height: "40vh",
        borderRadius: "12px",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          p: 4,
        }}
      >
        {/* left side */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            src="https://logo.clearbit.com/microsoft.com"
            
            sx={{
              width: 70,
              height: 70,
              borderRadius: "12px",
              bgcolor: "white",
            }}
          />

          <Box>
            <Typography variant="h5" sx={{ color: "white", fontWeight: 700 }}>
              Microsoft
            </Typography>

            <Typography variant="body2"  sx={{ color: "#d6d6d6" }}>
              IT Management · South Carolina · 15000 employees
            </Typography>
          </Box>
        </Stack>

        {/* right side */}
        <Box sx={{ width: 220, textAlign: "right" }}>
          <Typography sx={{ color: "#fff", mb: 1 }}>
            Profile Completion 10%
          </Typography>

          <LinearProgress
            variant="determinate"
            value={10}
            sx={{
              height: 6,
              borderRadius: 5,
              backgroundColor: "rgba(255,255,255,0.3)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#4caf50",
              },
            }}
          />
        </Box>

        
      </Box>


      
    </Box>




    </>

}