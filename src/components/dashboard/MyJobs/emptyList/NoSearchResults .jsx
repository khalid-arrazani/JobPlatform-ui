import { Box,Typography } from "@mui/material";
import { useJob } from "../../../../logic/context/JobContext";

export default function NoSearchResults () {
    const { felterData} = useJob();
  
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
          flexDirection:"column",boxSizing:"border-box",bgcolor:"#fff9f891",gap:1
        }}
      >
    
      
      <Typography sx={{fontWeight:600,fontSize:"2rem",color:"#010214ce",fontFamily:"ui-rounded"}} >No results found</Typography>
      <Typography sx={{fontWeight:600,fontSize:"1rem",color:"#5f5f5fd6",fontFamily:"ui-rounded"}} >We couldn't find any jobs matching.</Typography>

      <Typography sx={{fontWeight:600,fontSize:"1rem",color:"#5f5f5fd6",fontFamily:"ui-rounded"}} >"{felterData.search}" </Typography>
       

      </Box>
    </>
  );
}
