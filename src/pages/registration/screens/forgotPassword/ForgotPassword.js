import { useState } from "react";
import axios from "axios";
import Form from "../../components/form/Form";
import InfoPanel from "../../components/infoPanel/InfoPanel";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Send Link");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setButtonText("Sending Link");
    setIsButtonDisabled(true);

    try {
      await axios.post("http://localhost:5000/api/users/forgot-password", {
        email,
      });
      setButtonText("Email Sent");
    } catch (error) {
      console.error("Error sending email:", error);
      setButtonText("Send Link");
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="forgot-password row">
      <InfoPanel />
      <Form
        screen="forgot-password"
        email={email}
        setEmail={setEmail}
        buttonText={buttonText}
        isButtonDisabled={isButtonDisabled}
        onForgotPassword={handleForgotPassword}
      />
    </div>
  );
}
