import {
  Avatar,
  Box,
  Card,
  Chip,
  IconButton,
  Stack,
  Typography,
  Button,
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
    logo: "G",
    title: "Backend Developer",
    company: "Google",
    workMode: "Hybrid",
    jobType: "Full-time",
    salary: "$100k - $140k",
    savedAt: "Saved 5 hours ago",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    logo: "M",
    title: "UI/UX Designer",
    company: "Microsoft",
    workMode: "On-site",
    jobType: "Contract",
    salary: "$70k - $95k",
    savedAt: "Saved yesterday",
    skills: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    id: 4,
    logo: "A",
    title: "Mobile Developer",
    company: "Airbnb",
    workMode: "Remote",
    jobType: "Full-time",
    salary: "$90k - $125k",
    savedAt: "Saved 3 days ago",
    skills: ["React Native", "Expo", "Firebase"],
  },
  {
    id: 5,
    logo: "N",
    title: "DevOps Engineer",
    company: "Netflix",
    workMode: "Hybrid",
    jobType: "Full-time",
    salary: "$110k - $150k",
    savedAt: "Saved 1 week ago",
    skills: ["Docker", "Kubernetes", "AWS"],
  },
  {
    id: 6,
    logo: "U",
    title: "Data Analyst",
    company: "Uber",
    workMode: "Remote",
    jobType: "Part-time",
    salary: "$65k - $90k",
    savedAt: "Saved 4 days ago",
    skills: ["SQL", "Power BI", "Python"],
  },
  {
    id: 7,
    logo: "T",
    title: "Machine Learning Engineer",
    company: "Tesla",
    workMode: "On-site",
    jobType: "Full-time",
    salary: "$120k - $170k",
    savedAt: "Saved today",
    skills: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    id: 8,
    logo: "D",
    title: "Product Manager",
    company: "Dropbox",
    workMode: "Hybrid",
    jobType: "Full-time",
    salary: "$95k - $130k",
    savedAt: "Saved 6 days ago",
    skills: ["Roadmapping", "Agile", "Communication"],
  },
  {
    id: 9,
    logo: "C",
    title: "Cybersecurity Specialist",
    company: "Cisco",
    workMode: "Remote",
    jobType: "Contract",
    salary: "$85k - $115k",
    savedAt: "Saved 2 weeks ago",
    skills: ["Network Security", "SIEM", "Penetration Testing"],
  },
  {
    id: 10,
    logo: "F",
    title: "Full Stack Developer",
    company: "Facebook",
    workMode: "Hybrid",
    jobType: "Full-time",
    salary: "$100k - $145k",
    savedAt: "Saved 8 hours ago",
    skills: ["React", "Node.js", "PostgreSQL"],
  },
];
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import Pagination from "@mui/material/Pagination";

export default function ListJobsSaved({savedJobs,setCurrentPage}) {
  console.log(savedJobs);
  
  return (
    <>
      <Box
        sx={{ height: "82%", overflow: "auto", boxSizing: "border-box", pt: 2, display:"flex", flexDirection:"column"}}
      >
        {savedJobs?.jobs.map((job) => (
          <Card
            key={job.id}
            sx={{
              py: 1.5,
              px: 2,
              borderRadius: "10px",
              border: "1px solid #d1d1d1c5",
              boxShadow: "none",
              mb: 2,
              cursor: "pointer",
              transition: "all 0.2s ease",
              "&:hover": {
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.11)",
                transform: "translateY(-2px)",
              },
              minHeight: "9rem",
              mr: 1,
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
                  gap: 1.5,
                  alignItems: "flex-start",
                }}
              >
                <Avatar

                src={job.createdBy.companyLogo.url}
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, #9333EA, #3B82F6)",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    p:1
                  }}
                  />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#0F172A",
                    }}
                  >
                    {job.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.3,
                      color: "#64748B",
                      fontSize: "0.9rem",
                    }}
                  >
                     {job.createdBy.companyName}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ mt: 1 }}
                  >
                    <Chip
                      size="small"
                      label={job.workMode}
                      sx={{
                        bgcolor: "#F8FAFC",
                        borderRadius: "8px",
                      }}
                    />

                    <Chip
                      size="small"
                      label={job.jobType}
                      sx={{
                        bgcolor: "#F8FAFC",
                        borderRadius: "8px",
                      }}
                    />

                    <Chip
                      size="small"
                      label={``}
                      sx={{
                        bgcolor: "#F8FAFC",
                        borderRadius: "8px",
                      }}
                    />
                  </Stack>

                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: "0.75rem",
                      color: "#94A3B8",
                    }}
                  >
                    {job.savedAt}
                  </Typography>
                </Box>
              </Box>

              {/* Save Button */}
              <Box
              size="small"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 1.5,
                  minWidth: 280,
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
                  {job.skills.map((skill) => (
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
                          px: 1.2,
                          fontSize: "0.75rem",
                        },
                      }}
                    />
                  ))}
                </Stack>

                {/* Buttons */}
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      minWidth: 130,
                      height: 40,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontWeight: 500,
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
                  size="small"
                    sx={{
                      minWidth: 130,
                    
                      height: 40,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontWeight: 500,
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
          </Card>
        ))}


         <Pagination
    count={10}
    sx={{
      mt: "auto",
      alignSelf: "center", 
      mb:1
    }}
  />
      </Box>
    </>
  );
}
