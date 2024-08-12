import React, { useState, useEffect } from "react";

export default function AddEditAssignment({ formData, setFormData }) {
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Fetch courses and lessons from API
    const fetchCourses = async () => {
      // Replace with your API call
      const response = await fetch("http://localhost:5000/api/courses");
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleCourseChange = async (e) => {
    const courseId = e.target.value;
    const selectedCourse = courses.find((course) => course._id === courseId);

    if (selectedCourse) {
      setLessons(selectedCourse.lessons || []);
      setFormData({
        ...formData,
        selectedCourse: courseId,
        selectedLesson: "",
      });
    }
  };

  const handleLessonChange = (e) => {
    setFormData({
      ...formData,
      selectedLesson: e.target.value,
    });
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index][field] = value;
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  const handleAddQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...(formData.questions || []),
        { question: "", choices: [], correctAnswer: "" },
      ],
    });
  };

  const handleAddChoice = (questionIndex, choice = "") => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].choices = [
      ...(updatedQuestions[questionIndex].choices || []),
      choice,
    ];
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  const handleRemoveChoice = (questionIndex, choiceIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].choices.splice(choiceIndex, 1);
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  return (
    <div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Select course:</label>
          <br />
          <select
            name="selectedCourse"
            value={formData.selectedCourse || ""}
            onChange={handleCourseChange}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.courseTitle} ({course.courseCode})
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-lg-6">
          <label>Select lesson:</label>
          <br />
          <select
            name="selectedLesson"
            value={formData.selectedLesson || ""}
            onChange={handleLessonChange}
            disabled={!formData.selectedCourse}
          >
            <option value="">Select Lesson</option>
            {lessons.map((lesson) => (
              <option key={lesson._id} value={lesson._id}>
                {lesson.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {formData.questions &&
        formData.questions.map((question, index) => (
          <div key={index} className="form-group">
            <h3>Question {index + 1}</h3>
            <input
              placeholder="Question"
              type="text"
              name={`question${index}`}
              value={question.question || ""}
              onChange={(e) =>
                handleQuestionChange(index, "question", e.target.value)
              }
            />
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="form-group">
                <input
                  placeholder={`Choice ${choiceIndex + 1}`}
                  type="text"
                  name={`choice${index}_${choiceIndex}`}
                  value={choice}
                  onChange={(e) =>
                    handleQuestionChange(
                      index,
                      "choices",
                      question.choices.map((c, i) =>
                        i === choiceIndex ? e.target.value : c
                      )
                    )
                  }
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleRemoveChoice(index, choiceIndex)}
                >
                  Remove Choice
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleAddChoice(index, "")}
            >
              Add Choice
            </button>
            <input
              placeholder="Correct Answer"
              type="text"
              name={`correctAnswer${index}`}
              value={question.correctAnswer || ""}
              onChange={(e) =>
                handleQuestionChange(index, "correctAnswer", e.target.value)
              }
            />
          </div>
        ))}

      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>
    </div>
  );
}
