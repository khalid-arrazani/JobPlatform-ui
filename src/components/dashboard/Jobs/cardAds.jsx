import ads from "../../../assets/ads.png";
import { Card } from "@mui/material";

export default function CardAds() {
  return (
    <>
      <Card
        sx={{
          height: "55%",
          width: "85%",
          borderRadius: "10px",
          background: "#ffffff00",
          mt: "20px",
        }}
      >
        <img width={"100%"} src={ads} />
      </Card>
    </>
  );
}
