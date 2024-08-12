import React from "react";
import "./CoursesCard.css";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/features/userSlice";

export default function CoursesCards({
  course,
  onDownload,
  onRemoveDownload,
  isDownloaded,
}) {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleCardClick = () => {
    navigate(`/${user.role}/course-read/${course._id}`);
  };

  return (
    <div className="courses-card col-lg-3" onClick={handleCardClick}>
      <div className="card-header">
        <div className="icon-div">
          <SchoolIcon />
        </div>
        <p>
          {course.noOfLessons} lessons {course.noOfQuizzes} quizzes
        </p>
      </div>
      <div>
        <h4>{course.courseTitle}</h4>
        <p>{course.description}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-left">
          <PersonIcon />
          <p>{course.instructorName}</p>
        </div>
        <div className="card-footer-right">
          <button
            className={`download-btn ${isDownloaded && "remove"}`}
            onClick={(e) => {
              e.stopPropagation();
              if (isDownloaded) {
                onRemoveDownload(course);
              } else {
                onDownload(course);
              }
            }}
          >
            {isDownloaded ? (
              <>
                <DeleteIcon />
                <p>Remove Download</p>
              </>
            ) : (
              <>
                <CloudDownloadIcon />
                <p>Download for Offline</p>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
