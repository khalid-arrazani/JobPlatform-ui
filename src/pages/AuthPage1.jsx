import AuthLayout from "../layouts/AuthLayout";
import WelcomePage from "../components/auth/WelcomePanel";
import SignIn from "../components/auth/SignInForm";
import SingUpPage from "../components/auth/SignUpForm";

export default function AuthPage1() {
  return (
    <>
      <AuthLayout>
        <SingUpPage />
        <WelcomePage />
        <SignIn />
      </AuthLayout>
    </>
  );
}
