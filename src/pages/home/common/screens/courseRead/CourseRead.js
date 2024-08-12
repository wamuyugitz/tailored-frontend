import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../../../../redux/features/userSlice";
import "./CourseRead.css";

export default function CourseRead({ id }) {
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    // Fetch course details by ID
    fetch(`http://localhost:5000/api/courses/course-read/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course data:", error));
  }, [id]);

  // Function to transform YouTube and Google Drive URLs to embeddable URLs
  const getEmbedUrl = (url) => {
    let embedUrl = url;

    // Check if it's a YouTube URL
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch) {
      embedUrl = `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    // Check if it's a Google Drive URL
    const googleDriveRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\//;
    const googleDriveMatch = url.match(googleDriveRegex);
    if (googleDriveMatch) {
      embedUrl = `https://drive.google.com/file/d/${googleDriveMatch[1]}/preview`;
    }

    return embedUrl;
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-read">
      <button onClick={() => window.history.back()} className="back-btn">
        Back
      </button>
      <h2>{course.courseTitle}</h2>
      <div className="row">
        <div className="col-lg-8 p-2">
          <iframe
            src={getEmbedUrl(course.introVideoLink)}
            allowFullScreen
          ></iframe>
          <p>
            {course.instructorName} | {course.courseCode}
          </p>
          <h3>Overview</h3>
          <h4>Course Description</h4>
          <p>{course.description}</p>
        </div>
        <div className="col-lg-4">
          <h3>Course Content</h3>
          {course.lessons.map((lesson, index) => (
            <div
              key={index}
              className="row lesson"
              onClick={() => {
                navigate(
                  `/${user.role}/course-read/${course._id}/lesson-detail/${lesson.title}`
                );
              }}
            >
              <h5 className="col-lg-3">Lesson {index + 1}</h5>
              <p className="col-lg-9">{lesson.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
