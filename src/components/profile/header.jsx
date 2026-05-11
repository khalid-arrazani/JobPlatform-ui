import { Box, Avatar, Typography, Button, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Header (){



    return <>
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
                  p:3,
                  mt:1,
                  height:"100%"
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
                  {/* AVATAR */}
                  <Avatar
                    src=""
                    sx={{
                      width: "7rem",
                      height: "7rem",
                      border: "0.15rem solid white",

                    }}
                  />
    
                  {/* INFO */}
                  <Box>
                    <Typography
                      sx={{
                        color: "#ffffffd0",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                      }}
                    >
                      Khalid Arrazani
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ffffffb9",
                        fontSize: "0.6rem",
                      }}
                    >
                      Taroudant , Morocco
                    </Typography>
                    <Typography
                      sx={{
                        color: "#dbeafe",
                        fontSize: "0.75rem",
                        mt: "0.2rem",
                      }}
                    >
                      Frontend Developer
                    </Typography>
    
                    {/* SOCIALS */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: "0.4rem",
                        mt: "0.7rem",
                      }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          background: "rgba(255,255,255,0.1)",
                          color: "white",
    
                          "&:hover": {
                            background: "rgba(255,255,255,0.2)",
                          },
                        }}
                      >
                        <GitHubIcon sx={{ fontSize: "1rem" }} />
                      </IconButton>
    
                      <IconButton
                        size="small"
                        sx={{
                          background: "rgba(255,255,255,0.1)",
                          color: "white",
    
                          "&:hover": {
                            background: "rgba(255,255,255,0.2)",
                          },
                        }}
                      >
                        <LinkedInIcon sx={{ fontSize: "1rem" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{
                          background: "rgba(255,255,255,0.1)",
                          color: "white",
    
                          "&:hover": {
                            background: "rgba(255,255,255,0.2)",
                          },
                        }}
                      >
                        <TwitterIcon sx={{ fontSize: "1rem" }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
    
                {/* BUTTON */}
                <Button
                  variant="contained"
                  sx={{
                    background: "white",
                    color: "#363e53",
    
                    borderRadius: "0.5rem",
    
                    textTransform: "none",
                    fontWeight: "600",
    
                    "&:hover": {
                      background: "#f3f4f621",
                    },
                    mr: 4,
                    mt: "6%",
                  }}
                >
                  Edit Profile
                </Button>
              </Container>
    </>
}