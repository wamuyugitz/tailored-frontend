import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../redux/features/userSlice";
import Form from "../../components/form/Form";
import InfoPanel from "../../components/infoPanel/InfoPanel";
import axios from "axios";
import "./Signup.css";

export default function Signup({ screen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(""); // State for error message
  const [county, setCounty] = useState("");
  const [grade, setGrade] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    // Client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          role: "student",
          firstName,
          password,
          email,
          lastName,
          county,
          grade,
        }
      );

      if (response.status === 201) {
        const userData = response.data; // Get the user data from response

        // Check whether the ID is stored in 'id' or '_id'
        const userId = userData.id || userData._id;

        dispatch(
          login({
            id: userId, // Include the user's ID
            role: "student",
            firstName,
            lastName,
            email,
            county,
            grade,
            myCourses: [],
            myAssignments: [],
            myOfflineContents: [],
            myGrades: [],
          })
        );
        navigate("/");
      } else {
        setError(response.data.message); // Set error message
      }
    } catch (error) {
      console.error("Signup error:", error); // Debugging log

      // Check for specific error scenarios
      if (error.response) {
        // Server responded with a status other than 200 range
        if (error.response.status === 400) {
          setError("User already exists. Please log in.");
        } else {
          setError(
            error.response.data.message ||
              "Server error. Please try again later."
          );
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
      <Form
        email={email}
        onSignup={onSignup}
        screen={screen}
        password={password}
        lastName={lastName}
        county={county}
        grade={grade}
        setEmail={setEmail}
        firstName={firstName}
        setLastName={setLastName}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        setPassword={setPassword}
        setFirstName={setFirstName}
        setCounty={setCounty}
        setGrade={setGrade}
        error={error} // Pass error to Form if needed
      />
      <InfoPanel screen={screen} />
      {error && <div className="error-message">{error}</div>}{" "}
      {/* Display error message */}
    </div>
  );
}
