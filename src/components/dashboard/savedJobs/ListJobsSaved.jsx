import {
  Avatar,
  Box,
  Card,
  Chip,
  IconButton,
  Stack,
  Typography,
  Button
} from "@mui/material";

const jobs = [
  {
    id: 1,
    logo: "S",
    title: "Frontend Developer",
    company: "Shopify",
    workMode: "Remote",
    jobType: "Full-time",
    salary: "$80k - $120k",
    savedAt: "Saved 2 days ago",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    logo: "U",
    title: "UI/UX Designer",
    company: "Slack",
    workMode: "Hybrid",
    jobType: "Full-time",
    salary: "$70k - $100k",
    savedAt: "Saved 5 days ago",
    skills: ["Figma", "UI Design", "Prototyping"],
  },
  {
    id: 3,
    logo: "N",
    title: "Product Manager",
    company: "Notion",
    workMode: "Remote",
    jobType: "Full-time",
    salary: "$90k - $130k",
    savedAt: "Saved 1 week ago",
    skills: ["Strategy", "Roadmapping", "Agile"],
  },
  {
    id: 4,
    logo: "L",
    title: "Backend Engineer",
    company: "LinkedIn",
    workMode: "On-site",
    jobType: "Full-time",
    salary: "$100k - $150k",
    savedAt: "Saved 1 week ago",
    skills: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    id: 5,
    logo: "G",
    title: "Mobile Developer",
    company: "Google",
    workMode: "Hybrid",
    jobType: "Full-time",
    salary: "$95k - $140k",
    savedAt: "Saved yesterday",
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 6,
    logo: "M",
    title: "DevOps Engineer",
    company: "Microsoft",
    workMode: "Remote",
    jobType: "Full-time",
    salary: "$110k - $160k",
    savedAt: "Saved 3 days ago",
    skills: ["Docker", "Kubernetes", "Azure"],
  },
  {
    id: 7,
    logo: "A",
    title: "Data Analyst",
    company: "Amazon",
    workMode: "Hybrid",
    jobType: "Contract",
    salary: "$75k - $105k",
    savedAt: "Saved today",
    skills: ["SQL", "Power BI", "Excel"],
  },
  {
    id: 8,
    logo: "T",
    title: "QA Engineer",
    company: "Tesla",
    workMode: "On-site",
    jobType: "Full-time",
    salary: "$85k - $115k",
    savedAt: "Saved 4 days ago",
    skills: ["Cypress", "Jest", "Testing"],
  },
];
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';

export default function ListJobsSaved() {
  return (
    <>
    <Box sx={{height:"100%",overflow:"auto"}}>
     {jobs.map((job) => (
      <Card
        sx={{
          p: 3,
          borderRadius: "10px",
          border: "1px solid #EEF2F7",
          boxShadow: "none",
          mt: 2,
          cursor: "pointer",
          transition: "all 0.2s ease",

          "&:hover": {
            boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
            transform: "translateY(-2px)",
          },
         minHeight:"9rem",
         mr:1
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Side */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "flex-start",
            }}
          >
            <Avatar
              sx={{
                width: 64,
                height: 64,
                borderRadius: "18px",
                background: "linear-gradient(135deg, #9333EA, #3B82F6)",
                fontSize: "1.8rem",
                fontWeight: 700,
              }}
            >
              S
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Frontend Developer
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  color: "#64748B",
                  fontSize: "1rem",
                }}
              >
                Shopify
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                <Chip
                  size="small"
                  label="Remote"
                  sx={{
                    bgcolor: "#F8FAFC",
                    borderRadius: "8px",
                  }}
                />

                <Chip
                  size="small"
                  label="Full-time"
                  sx={{
                    bgcolor: "#F8FAFC",
                    borderRadius: "8px",
                  }}
                />

                <Chip
                  size="small"
                  label="$80k - $120k"
                  sx={{
                    bgcolor: "#F8FAFC",
                    borderRadius: "8px",
                  }}
                />
              </Stack>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: "0.85rem",
                  color: "#94A3B8",
                }}
              >
                Saved 2 days ago
              </Typography>
            </Box>
          </Box>

          {/* Save Button */}
          <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 2,
    minWidth: 320,
  }}
>
  {/* Save Icon */}
  <IconButton
    sx={{
      color: "#8B5CF6",
      alignSelf: "flex-end",

      "&:hover": {
        bgcolor: "#F5F3FF",
      },
    }}
  >
    <BookmarkAddedOutlinedIcon />
  </IconButton>

  {/* Skills */}
  <Stack
    direction="row"
    spacing={1}
    flexWrap="wrap"
    justifyContent="flex-end"
  >
    {["React", "TypeScript", "Tailwind CSS"].map((skill) => (
      <Chip
        key={skill}
        label={skill}
        size="small"
        sx={{
          bgcolor: "#F8F5FF",
          color: "#64748B",
          borderRadius: "999px",
          height: "34px",

          "& .MuiChip-label": {
            px: 1.5,
            fontSize: "0.85rem",
          },
        }}
      />
    ))}
  </Stack>

  {/* Buttons */}
  <Stack
    direction="row"
    spacing={2}
    justifyContent="flex-end"
  >
    <Button
      variant="outlined"
      sx={{
        minWidth: 150,
        height: 48,
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 600,
        borderColor: "#E2E8F0",
        color: "#475569",

        "&:hover": {
          borderColor: "#CBD5E1",
          bgcolor: "#fff",
        },
      }}
    >
      View Details
    </Button>

    <Button
      sx={{
        minWidth: 170,
        height: 48,
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 600,
        color: "#fff",
        boxShadow: "none",
        background:
          "linear-gradient(90deg, #A855F7 0%, #7C3AED 100%)",

        "&:hover": {
          boxShadow: "none",
          background:
            "linear-gradient(90deg, #9333EA 0%, #6D28D9 100%)",
        },
      }}
    >
      Apply Now
    </Button>
  </Stack>
</Box>
        </Box>
      </Card>))}
</Box>
    </>
  );
}
