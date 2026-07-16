import { Box, TextField, InputAdornment, Autocomplete,Typography } from "@mui/material";

import NoJobsimage from "./../../../../assets/NoJobsYet.svg"

export default function NoJobsYet() {
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
          flexDirection:"column"
        }}
      >
      <img src={NoJobsimage} alt="" srcset="" style={{width:"20%"}} />
      
      <Typography sx={{fontWeight:600,fontSize:"2rem",color:"#010214ce"}} >No jobs posted yet</Typography>
      <Typography sx={{fontWeight:600,fontSize:"1rem",color:"#5f5f5fd6",fontFamily:"ui-rounded"}} >You haven't posted any job positions yet.</Typography>
      <Typography sx={{fontWeight:600,fontSize:"1rem",color:"#5f5f5fd6",fontFamily:"ui-rounded"}} >Get started by posting your first job and find the perfect candidate</Typography>


      </Box>
    </>
  );
}
