import { Box, Typography, Avatar, Button, Card } from "@mui/material";
import SearchInput from "./searchInput";
export default function JobList() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
      salary: "$4000/month",
      description: "Looking for React developer with 2+ years experience",
      logo: "https://logo.clearbit.com/google.com",
    },
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
      salary: "$4000/month",
      description: "Looking for React developer with 2+ years experience",
      logo: "https://logo.clearbit.com/google.com",
    },
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
      salary: "$4000/month",
      description: "Looking for React developer with 2+ years experience",
      logo: "https://logo.clearbit.com/google.com",
    },
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
      salary: "$4000/month",
      description: "Looking for React developer with 2+ years experience",
      logo: "https://logo.clearbit.com/google.com",
    }
   
  ];

  return (
    <>
      <div
        style={{ maxHeight:"100%",  paddingTop: "0.8%",display:"flex",flexDirection:"column",justifyContent:"space-between",flex:1,height:"79vh" }}
      >
        <SearchInput/>
        {jobs.map((job) => (
          <Card
            sx={{
              display: "flex",
              gap: 1,
              p: 1,
              background: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              },
              m: 0.8,
              alignItems: "center",
              
            }}
          >
            {/* Logo */}
            <Avatar src={job.logo} sx={{width:"4rem",height:"4rem"}} />

            {/* Info */}
            <Box sx={{ flex: 1 }}>
              
              <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                {job.title}
              </Typography>

              <Typography sx={{ fontSize: "0.8rem", color: "#555" }}>
                {job.company} • {job.location}
              </Typography>

              <Typography
                sx={{ fontSize: "0.8rem", color: "#777", mt: 0.2 ,textWrap:"wrap" }}
                noWrap
              >
                {job.description}
              </Typography>

              <Typography
                sx={{ mt: 0.2, fontWeight: "bold", fontSize: "0.7rem" }}
              >
                💰 {job.salary}
              </Typography>
            </Box>

            {/* Button */}
            <Button
              size="small"
              variant="contained"
              sx={{
                borderRadius: "6px",
                textTransform: "none",
                fontSize: "11.5px",
                px: 1.5,
                minWidth: "auto",
              }}
            >
              Apply
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
