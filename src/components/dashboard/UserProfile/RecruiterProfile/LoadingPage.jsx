
import { Player } from "@lottiefiles/react-lottie-player";

import loadingAnimation from "../../../assets/loadingAnimation.json";

import { Box } from "@mui/material";

export default function LoadingPage() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Player
          autoplay
          loop
          src={loadingAnimation}
          style={{
            width: "90%",
            height: "90%",
          }}
        />
      </Box>
    </>
  );
}
