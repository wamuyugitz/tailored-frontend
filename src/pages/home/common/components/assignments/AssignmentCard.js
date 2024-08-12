import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../../../../redux/features/userSlice";
import "./AssignmentCard.css";

export default function AssignmentCard({ assignment }) {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStudentId = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/students/by-email/${user.email}`
        );
        const data = await response.json();
        setStudentId(data.id);
      } catch (error) {
        console.error("Error fetching student ID:", error);
      }
    };

    if (user.email) {
      fetchStudentId();
    }
  }, [user.email]);

  const handleOptionChange = (questionId, selectedOption) => {
    setResponses({ ...responses, [questionId]: selectedOption });
  };

  const handleSubmit = async () => {
    if (!studentId) {
      console.error("Student ID is not available");
      return;
    }

    try {
      dispatch(login({ ...user, id: studentId }));
      const response = await fetch(
        `http://localhost:5000/api/assignments/${assignment._id}/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId,
            responses,
            courseTitle: assignment.selectedCourse.courseTitle,
            courseCode: assignment.selectedCourse.courseCode,
            lessonId: assignment.selectedLesson._id, // Ensure this is a valid ObjectId string
            lessonTitle: assignment.selectedLesson.title,
          }),
        }
      );

      const result = await response.json();
      setResult(result);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting assignment:", error);
    }
  };

  return (
    <div className="assignment-card">
      <h3>
        {assignment.selectedCourse.courseTitle} (
        {assignment.selectedCourse.courseCode})
      </h3>
      <h4>{assignment.selectedLesson.title}</h4>
      {assignment.questions.map((question, index) => (
        <div key={index} className="question">
          <h5>
            Question {index + 1}: {question.question}
          </h5>
          {question.choices.map((choice, choiceIndex) => (
            <div key={choiceIndex} className="choice">
              <label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={choice}
                  checked={responses[question._id] === choice}
                  onChange={() => handleOptionChange(question._id, choice)}
                  disabled={submitted}
                />
                {choice}
              </label>
            </div>
          ))}
        </div>
      ))}
      {!submitted && user.role === "student" && (
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit Assignment
        </button>
      )}
      {submitted && result && (
        <div className="result">
          <h5>Result: {result.percentage}%</h5>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
}
