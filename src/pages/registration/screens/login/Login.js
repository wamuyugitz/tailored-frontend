import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../../redux/features/userSlice";
import Form from "../../components/form/Form";
import InfoPanel from "../../components/infoPanel/InfoPanel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ screen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      const { token, user } = response.data;

      localStorage.setItem("token", token);

      dispatch(
        login({
          id: user._id,
          role: user.role,
          grade: user.grade,
          firstName: user.firstName,
          email: user.email,
          lastName: user.lastName,
          county: user.county,
          myGrades: [],
          myCourses: [],
          myAssignments: [],
          myOfflineContents: [],
        })
      );

      navigate("/");
    } catch (error) {
      console.error("Login error:", error); // Debugging log

      // Check for specific error scenarios
      if (error.response) {
        // Server responded with a status other than 200 range
        if (error.response.status === 400) {
          setError(
            "Invalid credentials. Please check your email and password."
          );
        } else if (error.response.status === 404) {
          setError("User not found. Please sign up first.");
        } else {
          setError("Server error. Please try again later.");
        }
      } else if (error.request) {
        // Request was made but no response received
        setError("Network error. Please check your internet connection.");
      } else {
        // Something else happened
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div className="login row">
      <InfoPanel screen={screen} />
      <Form
        onLogin={onLogin}
        email={email}
        screen={screen}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error} // Pass error to Form if needed
      />
    </div>
  );
}
