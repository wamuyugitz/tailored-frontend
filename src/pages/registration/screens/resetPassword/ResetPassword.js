import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../../components/form/Form";
import InfoPanel from "../../components/infoPanel/InfoPanel";
import "./ResetPassword.css";

export default function ResetPassword({ screen, resetToken }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    // Verify token validity when component mounts
    const verifyToken = async () => {
      try {
        await axios.get(
          `http://localhost:5000/api/users/verify-reset-token/${resetToken}`
        );
        setTokenValid(true);
      } catch (error) {
        setTokenValid(false);
        alert("Invalid or expired token.");
        alert(
          "The reset link is invalid or has expired. Please request a new password reset link."
        );
      }
    };

    verifyToken();
  }, [resetToken]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      alert("Please ensure that both password fields match.");
      return;
    }

    if (!tokenValid) {
      alert("Invalid or expired token.");
      alert(
        "The reset link is invalid or has expired. Please request a new password reset link."
      );
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/reset-password/${resetToken}`,
        { password }
      );

      alert("Password reset successful. Redirecting to login page...");
      if (response.status === 200) {
        setTimeout(() => {
          navigate("/registration/login");
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        switch (error.response.status) {
          case 400:
            alert("Invalid request.");
            alert("Please ensure all fields are filled out correctly.");
            break;
          case 401:
            alert("Unauthorized.");
            alert(
              "The reset link may be invalid or expired. Please request a new one."
            );
            break;
          case 404:
            alert("Not found.");
            alert("The reset link is invalid. Please request a new one.");
            break;
          case 500:
            alert("Server error.");
            alert("An error occurred on the server. Please try again later.");
            break;
          default:
            alert("An error occurred.");
            alert(
              error.response.data.message ||
                "An unexpected error occurred. Please try again."
            );
            break;
        }
      } else if (error.request) {
        alert("Network error.");
        alert(
          "Unable to communicate with the server. Please check your internet connection."
        );
      } else {
        alert("Error.");
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login row">
      <InfoPanel />
      {tokenValid ? (
        <Form
          screen="reset-password"
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          onResetPassword={handleResetPassword}
        />
      ) : null}
    </div>
  );
}
