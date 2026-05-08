




import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Box,

  Card,

  Container,
} from "@mui/material";



export default function AuthLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#a782e7",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            height: "85vh",
            width: "80%",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2025/09/19/05/48/mountain-range-9842371_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {children}
        </Card>
      </Container>
    </Box>
  );
}