import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddEditCourse({ formData, setFormData }) {
  const [lessons, setLessons] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch the list of instructors from the database
    const fetchInstructors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/instructors"
        );
        const sortedInstructors = response.data.sort((a, b) =>
          a.fullName.localeCompare(b.fullName)
        );
        setInstructors(sortedInstructors);
      } catch (err) {
        console.error("Error fetching instructors", err);
      }
    };

    fetchInstructors();
  }, []);

  useEffect(() => {
    // Update lesson titles and contents based on the number of lessons
    const initialLessons = Array.from(
      { length: Math.max(1, formData.noOfLessons || 1) },
      (_, i) => ({
        title:
          formData.lessons && formData.lessons[i]?.title
            ? formData.lessons[i].title
            : "",
        content:
          formData.lessons && formData.lessons[i]?.content
            ? formData.lessons[i].content
            : "",
      })
    );
    setLessons(initialLessons);
  }, [formData.noOfLessons]);

  useEffect(() => {
    // Fetch and set the course code when the component loads
    const fetchCourseCode = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/courses/generateCode"
        );
        setFormData((prevFormData) => ({
          ...prevFormData,
          courseCode: response.data.courseCode,
        }));
      } catch (err) {
        console.error("Error generating course code", err);
      }
    };

    fetchCourseCode();
  }, [setFormData]);

  const handleLessonChange = (index, field, value) => {
    const newLessons = [...lessons];
    newLessons[index][field] = value;
    setLessons(newLessons);
    setFormData({
      ...formData,
      lessons: newLessons,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Course Title:</label>
          <br />
          <input
            required
            placeholder="Enter course title"
            type="text"
            name="courseTitle"
            value={formData.courseTitle || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Course Code:</label>
          <br />
          <input
            required
            type="text"
            name="courseCode"
            value={formData.courseCode || ""}
            disabled
          />
        </div>
      </div>

      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Description:</label>
          <br />
          <input
            required
            placeholder="Enter course Description"
            type="text"
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Level:</label>
          <br />
          <input
            required
            placeholder="Enter level"
            type="text"
            name="level"
            value={formData.level || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Author (Instructor):</label>
          <br />
          <select
            name="instructorName"
            required
            value={formData.instructorName || ""}
            onChange={handleChange}
          >
            <option value="">Select Instructor</option>
            {instructors.map((instructor) => (
              <option key={instructor.email} value={instructor.fullName}>
                {`${instructor.fullName} : ${instructor.email}`}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-lg-6">
          <label>Duration:</label>
          <br />
          <input
            required
            placeholder="Enter Duration"
            type="text"
            name="duration"
            value={formData.duration || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Start Date:</label>
          <br />
          <input
            required
            placeholder="Enter Start Date"
            type="date"
            name="startDate"
            value={formData.startDate || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Certificates offered:</label>
          <br />
          <input
            required
            placeholder="Enter certificate offered"
            type="text"
            name="certificatesOffered"
            value={formData.certificatesOffered || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row row">
        <div className="form-group col-lg-12">
          <label>No of Lessons:</label>
          <br />
          <input
            required
            placeholder="Enter No of Lessons"
            type="number"
            name="noOfLessons"
            value={formData.noOfLessons || 1}
            min="1"
            onChange={handleChange}
          />
        </div>
      </div>
      {lessons.map((lesson, index) => (
        <div className="form-group col-lg-12" key={index}>
          <div>
            <label>Lesson {index + 1} Title:</label>
            <br />
            <input
              required
              placeholder={`Enter title for lesson ${index + 1}`}
              type="text"
              value={lesson.title || ""}
              onChange={(e) =>
                handleLessonChange(index, "title", e.target.value)
              }
            />
          </div>
          <div>
            <label>Lesson {index + 1} Content:</label>
            <br />
            <textarea
              required
              placeholder={`Enter content for lesson ${index + 1}`}
              value={lesson.content || ""}
              onChange={(e) =>
                handleLessonChange(index, "content", e.target.value)
              }
            />
          </div>
        </div>
      ))}

      <div className="form-row row">
        <div className="form-group col-lg-12">
          <label>YouTube/Google Drive Link:</label>
          <br />
          <input
            required
            placeholder="Enter YouTube or Google Drive link"
            type="text"
            name="introVideoLink"
            value={formData.introVideoLink || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
