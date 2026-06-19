import { useState } from "react";
import { Card, Typography, Box, Button, Collapse } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import CompanyHeader from "./CompanyHeader";

export default function CompanyPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Box
        sx={{
          height: "92.3vh ",
          width: "100vw",
          bgcolor: "#bebfcd",
          boxSizing: "border-box",
          px: 6,
          pt: 3,
          overflow: "auto",
        }}
      >
        <CompanyHeader />

        <Box
          sx={{
            width: "100%",
            height: "100vh",
            bgcolor: "#ffffff00",
            my: 1.5,
            borderRadius: "15px",
            display: "flex",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100vh",
              bgcolor: "#47474768",
              borderRadius: "15px",
            }}
          >
            <Card
              sx={{
                width: "100%",
                borderRadius: "15px",
                p: 2.5,
                boxSizing: "border-box",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <InfoOutlinedIcon color="primary" />
                <Typography fontWeight={600} fontSize="1rem">
                  About Company
                </Typography>
              </Box>

              <Collapse in={expanded} collapsedSize={70}>
                <Typography
                  sx={{
                    mt: 1.5,
                    color: "#555",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                  }}
                >
                  Google is a global technology company focused on search, cloud
                  computing, artificial intelligence, and digital products used
                  by billions of people worldwide. Google's mission is to
                  organize the world's information and make it universally
                  accessible and useful. The company develops innovative
                  solutions in advertising, mobile operating systems,
                  productivity tools, and advanced AI technologies. Today,
                  Google serves billions of users across the globe through
                  products such as Search, YouTube, Android, Google Cloud,
                  Gmail, and Maps.
                </Typography>
              </Collapse>

              <Button
                size="small"
                onClick={() => setExpanded(!expanded)}
                sx={{
                  mt: 1,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                {expanded ? "Show Less" : "Read More"}
              </Button>
            </Card>
          </Box>

          <Box
            sx={{
              width: "50%",
              height: "100vh",
              bgcolor: "#8c878768",
              borderRadius: "15px",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
