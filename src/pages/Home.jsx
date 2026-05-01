import { Box, Container, Typography, Button, Stack, TextField, Card, CardContent } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "white" }}>

      {/* HERO SECTION */}
      <Container maxWidth="md" sx={{ textAlign: "center", pt: 10 }}>
        
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Find Your Dream Job
        </Typography>

        <Typography variant="h6" sx={{ color: "#94a3b8", mb: 4 }}>
          Explore thousands of opportunities and start your career today
        </Typography>

        {/* SEARCH BAR */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <TextField
            placeholder="Search jobs..."
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: 1, width: "300px" }}
          />
          <Button variant="contained" size="large">
            Search
          </Button>
        </Stack>

      </Container>

      {/* FEATURED JOBS */}
      <Container sx={{ mt: 10 }}>

        <Typography variant="h5" fontWeight="bold" mb={3}>
          Featured Jobs
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>

          {/* JOB CARD 1 */}
          <Card sx={{ flex: 1, backgroundColor: "#111827", color: "white" }}>
            <CardContent>
              <Typography variant="h6">Frontend Developer</Typography>
              <Typography sx={{ color: "#94a3b8" }}>
                Google - Remote
              </Typography>
              <Button sx={{ mt: 2 }} variant="outlined">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* JOB CARD 2 */}
          <Card sx={{ flex: 1, backgroundColor: "#111827", color: "white" }}>
            <CardContent>
              <Typography variant="h6">Backend Developer</Typography>
              <Typography sx={{ color: "#94a3b8" }}>
                Amazon - Morocco
              </Typography>
              <Button sx={{ mt: 2 }} variant="outlined">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* JOB CARD 3 */}
          <Card sx={{ flex: 1, backgroundColor: "#111827", color: "white" }}>
            <CardContent>
              <Typography variant="h6">UI/UX Designer</Typography>
              <Typography sx={{ color: "#94a3b8" }}>
                Startup - Hybrid
              </Typography>
              <Button sx={{ mt: 2 }} variant="outlined">
                View Details
              </Button>
            </CardContent>
          </Card>

        </Stack>

      </Container>

      {/* CTA SECTION */}
      <Container sx={{ textAlign: "center", mt: 10, pb: 10 }}>
        <Typography variant="h5" fontWeight="bold">
          Are you a recruiter?
        </Typography>

        <Typography sx={{ color: "#94a3b8", mb: 3 }}>
          Post your jobs and find the best talent easily
        </Typography>

        <Button variant="contained" size="large">
          Post a Job
        </Button>
      </Container>

    </Box>
  );
}