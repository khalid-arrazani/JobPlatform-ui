import Navbar from "../components/dashboard/Navbar.jsx";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid";
import {Container} from "@mui/material"
export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Grid container sx={{ flex: 1, width: "100%" , gap:1 , justifyContent:"space-around" }}>
        <Grid item size={3}>
          <Container sx={{ height: "99%" }}>Sidebar</Container>
        </Grid>

        <Grid item size={5}>
          <Container sx={{  height: "100%" }}>Content</Container>
        </Grid>

        <Grid item size={3}>
          <Container sx={{  height: "99%" }}>Extra</Container>
        </Grid>
      </Grid>

      {/* <Box sx={{ padding: 3 }}>{children}</Box> */}
    </Box>
  );
}
