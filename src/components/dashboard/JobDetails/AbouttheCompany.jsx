import { useState } from "react";
import { Box, Card, Typography } from "@mui/material";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";


export default function AbouttheCompany() {
  const [expanded, setExpanded] = useState(false);

  const description = `Google is a global technology company focused on
organizing the world's information and making it
universally accessible and useful.

Founded in 1998, Google develops products used
by billions of people, including Search, Maps,
YouTube, Android, and Google Cloud.

The company values innovation, collaboration,
diversity, and continuous learning.

Website: google.com
Industry: Technology
Company Size: 100,000+ employees
Founded: 1998`;

  return (
    <Card
      sx={{
        flex: 1,
        height: "auto",
        px: "1.5rem",
        py: "1.5rem",
        borderRadius: "10px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        mt: 2,
        mb: 5,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "#1F2937",
          mb: 2,
        }}
      >
        <Box sx={{display:"flex",gap:1}}><BusinessOutlinedIcon sx={{ color: "#8B5CF6" }} />
       About the Company</Box>
        
      </Typography>

      <Box>
        <Typography
          sx={{
            color: "#4B5563",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            lineHeight: 1.6,
            fontSize: "0.95rem",

            ...(expanded
              ? {}
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }),
          }}
        >
          {description}
        </Typography>

        {description.length > 250 && (
          <Typography
            onClick={() => setExpanded(!expanded)}
            sx={{
              mt: 1.5,
              color: "#8B5CF6",
              fontWeight: 600,
              cursor: "pointer",
              width: "fit-content",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {expanded ? "Show less" : "More"}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
