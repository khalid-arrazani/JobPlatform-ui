import { Box } from "@mui/material";

import Header from "./header";

import ListJobsSaved from "./ListJobsSaved";

export default function SavedJobs() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100%",
          bgcolor: "#dcdbdb",
          display: "flex",boxSizing: "border-box"
        }}
      >
        {/* left side header and SavedJobsList */}

        <Box
          sx={{
            width: "70vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            flexDirection:"column",
            borderRight: "solid 0.5px #6160601c",
            boxSizing: "border-box",
            px: 5,
          }}
        >
            <Header/>
            <Box
            sx={{
             height: "82%",
              width: "100%",
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-between",
  
            }}
          >
            <ListJobsSaved/>
        

          </Box>

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
          ></Box>
        </Box>
      </Box>
    </>
  );
}
