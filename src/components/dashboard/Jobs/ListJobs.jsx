import { Box, Typography, Avatar, Button, Card } from "@mui/material";
import SearchInput from "./searchInput";
export default function JobList() {
  
  const jobs = [
    {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    salary: "$4,000/month",
    description:
      "Looking for a React developer with 2+ years of experience.",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png",
  },

  {
    id: 2,
    title: "Backend Engineer",
    company: "Microsoft",
    location: "Seattle, USA",
    salary: "$5,500/month",
    description:
      "Node.js and MongoDB developer to build scalable APIs and services.",
    logo: "https://cdn.pixabay.com/photo/2021/10/17/14/47/windows-7-logo-6718525_1280.png",
  },

  {
    id: 3,
    title: "UI/UX Designer",
    company: "Airbnb",
    location: "San Francisco, USA",
    salary: "$4,800/month",
    description:
      "Creative designer needed to improve user experiences across web products.",
    logo: "https://cdn.pixabay.com/photo/2018/05/08/21/28/airbnb-3384008_1280.png",
  },

  {
    id: 4,
    title: "Full Stack Developer",
    company: "Spotify",
    location: "Stockholm, Sweden",
    salary: "$6,000/month",
    description:
      "Work with React, Node.js, and cloud technologies on music platforms.",
    logo: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png",
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
          key={job.id}
            sx={{
              display: "flex",
              gap: 1,
              p: 1,
              background: "#ffffffe3",
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
            <Avatar src={job.logo} sx={{width:"4rem",height:"4rem" ,backgroundSize: "cover"}} />

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
