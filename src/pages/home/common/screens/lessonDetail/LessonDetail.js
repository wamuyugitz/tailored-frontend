import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectUser } from "../../../../../redux/features/userSlice";
import "./LessonDetail.css";

export default function LessonDetail() {
  const params = useParams();
  const courseId = params["*"].split("/")[0];
  const lessonTitle = params["*"].split("/")[2];

  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [courseCode, setCourseCode] = useState("");
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const user = useSelector(selectUser);

  useEffect(() => {
    // Fetch all lessons for the course
    fetch(`http://localhost:5000/api/courses/course-read/${courseId}`)
      .then((response) => response.json())
      .then((data) => {
        const lessonIndex = data.lessons.findIndex(
          (l) => l.title === decodeURIComponent(lessonTitle)
        );
        setLessons(data.lessons);
        setCurrentLessonIndex(lessonIndex);
        setLesson(data.lessons[lessonIndex]);
        setCourseCode(data.courseCode);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, [courseId, lessonTitle]);

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      const previousLesson = lessons[currentLessonIndex - 1];
      navigate(
        `/${
          user.role
        }/course-read/${courseId}/lesson-detail/${encodeURIComponent(
          previousLesson.title
        )}`
      );
    }
  };

  const handleNext = () => {
    if (currentLessonIndex < lessons.length - 1) {
      const nextLesson = lessons[currentLessonIndex + 1];
      navigate(
        `/${
          user.role
        }/course-read/${courseId}/lesson-detail/${encodeURIComponent(
          nextLesson.title
        )}`
      );
    } else if (user.role === "student") {
      // Complete course
      console.log("Sending data to complete course:", { courseId, courseCode });

      fetch(`http://localhost:5000/api/students/${user.id}/complete-course`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
          courseCode,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Course completed:", data);
          alert("Course completed!");
          navigate("/student/courses");
        })
        .catch((error) => console.error("Error completing course:", error));
    }
  };

  if (!lesson) return <p>Loading lesson...</p>;

  const isLastLesson =
    currentLessonIndex === lessons.length - 1 && user.role === "student";
  const buttonClass = isLastLesson ? "completeBtn" : "nextBtn";
  const buttonText = isLastLesson ? "Complete Course" : "Next";

  return (
    <div className="lesson-detail">
      <div className="row">
        <div className="col-lg-3">
          <ul>
            {lessons.map((l, index) => (
              <li
                key={index}
                className={index === currentLessonIndex ? "highlighted" : ""}
                onClick={() =>
                  navigate(
                    `/student/course-read/${courseId}/lesson-detail/${encodeURIComponent(
                      l.title
                    )}`
                  )
                }
              >
                {l.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-9">
          <h2>{lesson.title}</h2>
          <div>{lesson.content}</div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentLessonIndex === 0}>
          Previous
        </button>

        <button onClick={handleNext} className={buttonClass}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
