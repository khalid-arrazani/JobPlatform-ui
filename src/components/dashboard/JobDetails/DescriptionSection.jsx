import { useState } from "react";
import { Box, Card, Typography } from "@mui/material";

export default function DescriptionSection() {
  const [expanded, setExpanded] = useState(false);

  const description = `
We are looking for a talented Frontend Developer to join our growing team.
You will be responsible for building modern, responsive user interfaces using React and TypeScript.
The ideal candidate has a strong understanding of JavaScript, REST APIs, and state management libraries.
You will collaborate closely with designers, backend developers, and product managers to deliver exceptional user experiences.

Responsibilities include developing reusable components, optimizing application performance,
participating in code reviews, and maintaining high-quality coding standards.
Experience with Git, testing frameworks, and UI/UX principles is highly valued.
`;

  return (
    <Card
      sx={{
        width: "80%",
        px: 4,
        py: 3,
        borderRadius: "20px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        mt: 2,
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
        About this role
      </Typography>

      <Box>
        <Typography
          sx={{
            color: "#4B5563",
            lineHeight: 1.9,
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