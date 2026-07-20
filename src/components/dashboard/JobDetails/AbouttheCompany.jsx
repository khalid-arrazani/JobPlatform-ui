import { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

export default function AbouttheCompany({ jobInfo }) {
  const [expanded, setExpanded] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(jobInfo?.createdBy?.description);
  }, [jobInfo?.createdBy]);


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
        mb: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "#1F2937",
          mb: 2,
          display: "flex",
          gap: 1,
        }}
      >
        <BusinessOutlinedIcon sx={{ color: "#8B5CF6" }} />
        About the Company
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

        {description?.length > 250 && (
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
