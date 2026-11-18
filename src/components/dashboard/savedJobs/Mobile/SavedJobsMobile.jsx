import {
 
  Box,

} from "@mui/material";

import Header from "./header";


import Footer from "./Footer";

export default function SavedJobsMobile() {


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
            width: "100%",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            borderRight: "solid 0.5px #6160601c",
            boxSizing: "border-box",
          }}
        >
          <Header />

          <Footer/>



        </Box>
      </Box>
    </>
  );
}
