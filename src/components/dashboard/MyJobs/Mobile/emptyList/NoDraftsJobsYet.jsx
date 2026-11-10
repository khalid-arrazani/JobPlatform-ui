import { Box,Typography } from "@mui/material";



export default function NoDraftsJobsYet() {
  return (
    <>
      <Box
        sx={{
          border: "dashed 1px #ddd",
          width: "95%",
          height: "80%",
          placeSelf: "center",
          borderRadius: "10px",
          overflow:"hidden",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          gap:1,
          bgcolor:"#fff9f891"
        }}
      >

      
      <Typography sx={{fontWeight:600,fontSize:"2rem",color:"#010214ce",fontFamily:"ui-rounded"}} >No drafts</Typography>
      <Typography sx={{fontWeight:600,fontSize:"1rem",color:"#5f5f5fd6",fontFamily:"ui-rounded"}} >You don't have any unfinished job posts.</Typography>
       

      </Box>
    </>
  );
}
