import {
  Box,
  Typography,

  Container,
  Avatar,
 
} from "@mui/material";


import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

export default function Header({data}) {


  return (
    <>


      <Container
        sx={{
          borderRadius: "1rem",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #4f46e5 100%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 0.3rem 1rem rgba(0,0,0,0.12)",
          p: " 5.5rem",
          mt: 1,
          height: "100%",
        }}
      >
        {/* BACKGROUND SHAPE */}
        <Box
          sx={{
            position: "absolute",
            width: "50%",
            height: "12rem",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.07)",
            right: "15rem",
            top: "-5rem",
          }}
        />

        {/* LEFT SIDE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            zIndex: 2,
            paddingLeft: 5,
          }}
        >
          <Box
        sx={{
          position: "relative",
          width: "8rem",
          height: "8rem",
          mr: "1rem",
        }}
      >
        {/* Avatar */}
        <Avatar
          src={data?.profile?.ProfileImage?.url}
          sx={{
            width: "100%",
            height: "100%",
            border: "4px solid white",
          }}
        />

        
      </Box>
  

          {/* INFO */}
          <Box>
            <Box
              sx={{
                color: "#ffffffd0",
                fontWeight: "bold",
                fontSize: "1.3rem",
                display: "flex",
                gap: "0.3rem",
                alignItems: "center",
              }}
            >
              {data?.profile?.fullName}
              <Box
                sx={{
                  borderRadius: "0.3rem",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  px: "0.5rem",
                  background: " #4338ca ",
                  color: "#eeeeee",
                  "&:hover": {
                    transform: "translateY(-0.12rem)",
                    transition: "0.3s",
                    boxShadow: "0 0.3rem 0.8rem rgba(99,102,241,0.2)",
                  },
                  p: "0.3rem",
                }}
              >
                Recruiter
              </Box>
            </Box>
            <Typography
              sx={{
                color: "#f0f0f0",
                fontSize: "0.89rem",
                mt: "0.3rem",
              }}
            >
              {data?.profile?.headline}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                mt: "0.4rem",
              }}
            >
              {/* Location */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <LocationOnIcon
                  sx={{
                    fontSize: "1.1rem",
                    color: "#ffffffb9",
                  }}
                />

                <Typography
                  sx={{
                    color: "#ffffffb9",
                    fontSize: "0.8rem",
                  }}
                >
                  {data?.profile?.location}
                </Typography>
              </Box>

              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <EmailIcon
                  sx={{
                    fontSize: "1.1rem",
                    color: "#ffffffb9",
                  }}
                />

                <Typography
                  sx={{
                    color: "#ffffffb9",
                    fontSize: "0.8rem",
                  }}
                >
                  {data?.profile?.userId?.email}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
