import { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";

export default function DescriptionSection({jobInfo}) {
  const [expanded, setExpanded] = useState(false);
  const [description, setDescription] = useState("");



useEffect(()=>{ setDescription(jobInfo?.description) },[jobInfo?.description])
  return (
   
    <Card
      sx={{
        width: "100%",
        px: 2,
        py: 1.5,
        borderRadius: "5px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        height: "auto",
        mt: 2,
        boxSizing:"border-box"
      }}
    >
      <Typography
        sx={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#1f2937ed",
          mb: 1,
        
        }}
      >
        About this role
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
              }
            }}
          >
            {expanded ? "Show less" : "More"}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
