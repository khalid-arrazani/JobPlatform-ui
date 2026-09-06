import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Button, Box, CardContent, TextField, Typography } from "@mui/material";

export default function SignInMobile() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2025/09/19/05/48/mountain-range-9842371_1280.jpg')", backgroundSize: "cover",
            backgroundPosition: "top",
            display:"flex",
            flexDirection:"column-reverse",
            
        }}
      >
        <Box sx={{height:"80%" , width:'100%',bgcolor:"#fff"}}></Box>
      </Box>
    </>
  );
}
