import { Box,Card } from "@mui/material";
import CompanyHeader from "./CompanyHeader";

export default function CompanyPage() {
  return (
    <>
      <Box
        sx={{
          height: "92.3vh ",
          width: "100vw",
          bgcolor: "#bebfcd",
          boxSizing: "border-box",
          px: 6,
          pt: 3,
          overflow:"auto"
        }}
      >

     <CompanyHeader/>

     <Box sx={{width:"100%" , height:"100vh" , bgcolor:"#ffffff00",my:1.5,borderRadius:"15px",display:"flex",gap:1.5}}>
        <Box sx={{width:"50%" , height:"100vh" , bgcolor:"#47474768",borderRadius:"15px"}}>

            <Card sx={{height:"10rem",width:"100%",borderRadius:"15px"}}>


            </Card>

        </Box>

        <Box sx={{width:"50%" , height:"100vh" , bgcolor:"#8c878768",borderRadius:"15px"}}></Box>

     </Box>
      




      </Box>
    </>
  );
}
