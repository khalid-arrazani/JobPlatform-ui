import { Box } from "@mui/material";

import Header from "./header";

import ListJobsSaved from "./ListJobsSaved";
import ProfileCard from "./ProfileCard";

export default function SavedJobs() {
  return (
    <>
      <Box
        sx={{
            
          width: "100vw",
          height: "92.4vh",
          bgcolor: "#dcdbdb",
          display: "flex",
        }}
      >
        {/* left side header and SavedJobsList */}
        <Box
          sx={{
            width: "70vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            borderRight: "solid 0.5px #6160601c",
            boxSizing: "border-box",
            px: 5,
          }}
        >
          <Header />
          <ListJobsSaved/>
        </Box>

        {/* right side profile card  */}
        <Box
          sx={{
            width: "30vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "95%",
              width: "90%",
              bgcolor: "#f5eaf9bb",
              borderRadius: "10px",
            }}
          >
            <ProfileCard/>
          </Box>
        </Box>
      </Box>
    </>
  );
}
