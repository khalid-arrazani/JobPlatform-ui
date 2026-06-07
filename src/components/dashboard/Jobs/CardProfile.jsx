import { Card } from "@mui/material";
import { Avatar, Typography, Box } from "@mui/material";
import { useProfile } from "../../../logic/context/profileContext";

export default function CardProfile() {
  const { ...state } = useProfile();
  return (
    <>
      <Card
        sx={{
          height: "20vw",
          width: "60%",
          borderRadius: "20px",
          mt: "20px",
          mr: "20px",
          overflow: "hidden",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            height: "25%",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          }}
        />

        {/* Content */}
        <Box
          sx={{
            height: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: "-50px",
            textAlign: "center",
            p: 2,
          }}
        >
          {/* Image */}
          <Avatar
            src={state.user?.profile?.ProfileImage?.url}
            sx={{
              width: "45%",
              height:"45%",
              border: "4px solid white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />

          {/* Name */}
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              mt: "0.5rem",
            }}
          >
            {state.user?.profile?.fullName}
          </Typography>

          {/* Description */}
          <Typography sx={{ fontSize: "0.9rem", color: "#666", mt: 1 }}>
            {state.user?.profile?.headline}
          </Typography>

          {/* Address */}
          <Typography sx={{ fontSize: "0.7rem", color: "#888", mt: 1 }}>
            📍 {state.user?.profile?.location}
          </Typography>
        </Box>
      </Card>
    </>
  );
}
