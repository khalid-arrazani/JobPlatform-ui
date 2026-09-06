import AuthLayout from "../layouts/AuthLayout";
import WelcomePage from "../components/auth/WelcomePanel";
import SignIn from "../components/auth/SignInForm";
import SingUpPage from "../components/auth/SignUpForm";

import {
  
  Card,
  Container,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

export default function AuthPage1() {

const isMobile = useMediaQuery("(max-width:600px)");

const isTablet = useMediaQuery(
  "(min-width:601px) and (max-width:1024px)"
);



  return (
    <>
      <AuthLayout>

        

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
        <SingUpPage />
        <WelcomePage />
        <SignIn />
        </Card> 
        </Container>





      </AuthLayout>
    </>
  );
}
