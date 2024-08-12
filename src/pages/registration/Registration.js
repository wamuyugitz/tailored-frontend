import { useLocation, useParams } from "react-router-dom";
import "./Registration.css";
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import ForgotPassword from "./screens/forgotPassword/ForgotPassword";
import ResetPassword from "./screens/resetPassword/ResetPassword";

export default function Registration() {
  const { pathname } = useLocation();
  const { screen, resetToken } = useParams();

  // Defining a map of URL paths to their corresponding screens
  const screens = {
    login: Login,
    "sign-up": Signup,
    "forgot-password": ForgotPassword,
    "reset-password": ResetPassword,
  };

  // Check if resetToken exists and the path is for reset-password
  if (pathname.includes("reset-password") && resetToken) {
    return (
      <div className="registration">
        <ResetPassword screen="reset-password" resetToken={resetToken} />
      </div>
    );
  }

  // Rendering the screen corresponding to the pathSegment if it exists in the screens map
  const ScreenToRender = screens[screen];

  return (
    <div className="registration">
      {ScreenToRender && <ScreenToRender screen={screen} />}
    </div>
  );
}
