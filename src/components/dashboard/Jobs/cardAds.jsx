import ads from "../../../assets/ads.png";
import { Box } from "@mui/material";

export default function CardAds() {
  return (
    <>
      <Box
        sx={{
           
         
          borderRadius: "10px",
          background: "#ffffff00",
          mt: "20px",
          padding:"0px"
        }}

        style={{width: "fit-content", height: "fit-content", backgroundSize: "cover"}}

      >
        <img style={{width: "17.5rem",margin:"0px",borderRadius:"10px"}} src={ads} />
      </Box>
    </>
  );
}
