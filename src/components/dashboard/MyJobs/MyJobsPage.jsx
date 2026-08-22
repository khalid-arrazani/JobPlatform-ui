import {
  Box,
} from "@mui/material";



import Header from "./Header";
import Footer from "./Footer";



export default function MyJobsPage() {


  return (
    <>
      <Box
        sx={{
          height: "93%",
          width: "100vw",
          bgcolor: "#f2f2f5",
          boxSizing: "border-box",
          pt: 3,
          px: 2,
          overflow: "auto",
          display: "flex",
          gap: 1.5,
        }}
      >
        {/* left side */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#ffffff",
            boxSizing: "border-box",
            overflow: "hidden",
            borderRadius: "10px 10px 0px 0px",
            pt: 1,
          }}
        >
          {/* Header */}
          <Header/>

          {/* Footer */}
          <Footer />


        </Box>

 

       
      </Box>
    </>
  );
}
