import { useState } from "react";
import { Box, Card, Typography } from "@mui/material";

export default function DescriptionSection() {
  const [expanded, setExpanded] = useState(false);

  const description = `We are looking for a passionate and talented Frontend Developer to join our growing team and help us build exceptional digital experiences for users around the world. In this role, you will work closely with designers, backend engineers, and product managers to transform ideas into intuitive, high-performance web applications.

As a Frontend Developer, you will be responsible for developing responsive and accessible user interfaces using modern technologies and best practices. You will take ownership of features from concept to deployment, ensuring that every interaction is smooth, visually appealing, and optimized for performance. Attention to detail, creativity, and a user-first mindset are essential qualities for success in this position.

Your day-to-day responsibilities will include building reusable UI components, integrating RESTful APIs, managing application state, optimizing loading times, and ensuring cross-browser compatibility. You will participate in code reviews, contribute to architectural decisions, and continuously improve the quality and maintainability of the codebase.

The ideal candidate has strong experience with JavaScript and modern frontend frameworks such as React. Familiarity with TypeScript, state management libraries, component-driven development, and version control systems like Git is highly desirable. Experience with responsive design principles and a solid understanding of HTML, CSS, and web accessibility standards are also important.

You should be comfortable collaborating within an agile environment, communicating effectively with both technical and non-technical stakeholders, and adapting quickly to changing priorities. We value developers who are curious, eager to learn, and motivated to explore new technologies that can improve both the product and the development process.

In addition to technical skills, we are looking for someone who enjoys solving complex problems and takes pride in delivering polished experiences that delight users. You should be able to balance speed with quality, think critically about implementation choices, and proactively identify opportunities for improvement.

By joining our team, you will have the opportunity to work on meaningful projects that impact thousands of users. We offer a collaborative and supportive environment where innovation is encouraged, ideas are welcomed, and professional growth is a priority. You'll work alongside talented individuals who are passionate about creating products that make a difference.

If you are excited about crafting beautiful interfaces, writing clean and maintainable code, and contributing to products that users genuinely love, we would be thrilled to hear from you. This is an excellent opportunity for a frontend developer who wants to grow their career, take on new challenges, and be part of a team that values excellence, creativity, and continuous learning.`;

  return (
    <Card
      sx={{
        flex: 1,
        height: "auto", px: "1.5rem",py: "1.5rem",
        borderRadius: "10px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        mt: 2,
        mb:2
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
