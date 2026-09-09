
import WelcomePage from "./WelcomePanel";
import SignIn from "./SignInForm";


import { Card, Container } from "@mui/material";
import SingUp from "./SignUpForm";





export default function SignPc() {



    return <>

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
            <SingUp/>
            <WelcomePage />
            <SignIn/>
          </Card>
    </Container>


    </>
}