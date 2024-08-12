import React, { useEffect, useState } from "react";
import axios from "axios";
import CoursesCards from "../../components/coursesCards/CoursesCard";
import ScreenHeader from "../../components/screenHeader/ScreenHeader";
import ScreenTab from "../../components/screentab/ScreenTab";
import "./Courses.css";

export default function Courses({ handleModalType }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data);
      } catch (err) {
        setError("Error fetching courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleDownloadForOffline = async (course) => {
    try {
      // Fetch course data
      const response = await axios.get(
        `http://localhost:5000/api/courses/course-read/${course._id}`
      );
      const courseData = response.data;

      // Cache course data
      const cache = await caches.open("courses-offline-cache");
      await cache.put(
        `http://localhost:5000/api/courses/course-read/${course._id}`,
        new Response(JSON.stringify(courseData))
      );

      alert(`${course.courseTitle} has been downloaded for offline use.`);
    } catch (err) {
      console.error("Error downloading course:", err);
      alert("Failed to download course. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="courses">
      <ScreenHeader
        title={"Courses"}
        btnText={"Add Course"}
        handleModalType={() => handleModalType("form", "add-course")}
      />
      <ScreenTab
        tabs={["All", "English", "Biology", "Kiswahili", "Chemistry"]}
      />
      <div className="courses-cards row">
        {courses.length === 0 ? (
          <p>No courses yet</p>
        ) : (
          courses.map((course) => (
            <CoursesCards
              key={course._id}
              course={course}
              onDownload={handleDownloadForOffline}
            />
          ))
        )}
      </div>
    </div>
  );
}
