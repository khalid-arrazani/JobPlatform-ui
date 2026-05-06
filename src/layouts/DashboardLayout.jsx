import "./Dashboard.css";
import { Box } from "@mui/material";


import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


import Navbar from "../components/dashboard/Navbar.jsx";
import JobList from "../components/dashboard/ListJobs.jsx";
import CardAds from "../components/dashboard/cardAds.jsx";
import CardProfile from "../components/dashboard/CardProfile.jsx";


export default function DashboardLayout() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#ebeaea",
        padding: 0,
      }}
    >
      <Navbar />


      <div class="parent">

        <div class="div1">
          <CardProfile></CardProfile>
        </div>



        <div class="div2">
          <JobList />
        </div>



        <div class="div3">
          <CardAds/>
        </div>


        <div class="div4">
          <Stack spacing={2}>
            <Pagination count={50} />
          </Stack>
        </div>

        
      </div>
    </Box>
  );
}
