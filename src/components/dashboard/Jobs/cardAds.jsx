import ads from "../../../assets/ads.png";
import { Box } from "@mui/material";

export default function CardAds() {
  return (
    <>
      <Box
        sx={{
           
         
          borderRadius: "10px",
          background: "#ffffff00",
          mt: "20px"
        }}

        style={{ width: "100%", height: "fit-content", backgroundSize: "cover",display:"flex",justifyContent:"center" }}

      >
        <img style={{width: "80%",margin:"0px",borderRadius:"10px",marginRight:"1.5rem"}} src={ads} />
      </Box>
    </>
  );
}
