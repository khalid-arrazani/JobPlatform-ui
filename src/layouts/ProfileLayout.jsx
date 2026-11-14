import { Box } from "@mui/material";
 


export default function ProfileLayout({children, part, setPart}) {
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
   

       {children}
      
        

    </Box>
  );
}