import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ScreenHeader from "../../../../common/components/screenHeader/ScreenHeader";
import ScreenTab from "../../../../common/components/screentab/ScreenTab";
import { login, selectUser } from "../../../../../../redux/features/userSlice";
import axios from "axios";
import "./Settings.css";

export default function Settings() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    county: "",
    school: "",
    grade: "",
    dateOfBirth: "",
    gender: "",
  });

  useEffect(() => {
    // Fetch user details from the backend
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/fetch/${user.id}`
        );
        const userDetails = response.data;
        setFormData({
          fullName: `${userDetails.firstName} ${userDetails.lastName}`,
          email: userDetails.email,
          county: userDetails.county,
          school: userDetails.school,
          grade: userDetails.grade,
          dateOfBirth: userDetails.dateOfBirth,
          gender: userDetails.gender,
        });
      } catch (error) {
        console.error("Error fetching user details", error);
      }
    };

    fetchUserDetails();
  }, [user.id]);

  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/update/${user.id}`,
        formData
      );
      dispatch(login(response.data)); // Update user in the Redux store
      alert("User details updated successfully!");
    } catch (error) {
      console.error("Error updating user details", error);
      alert("Failed to update user details.");
    }
  };

  return (
    <div className="settings">
      <ScreenHeader title={"Settings"} />
      <ScreenTab tabs={["Edit Profile"]} />
      <div className="settings-profile-edits row">
        <div className="profile-settings col-lg-5">
          <img
            src={
              "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt="profile"
          />
          <h3>
            {user?.firstName} {user?.lastName}
          </h3>
          <div className="course-status">
            <div>
              <div className="count">
                <h3>10</h3>
              </div>
              <p>Course in progress</p>
            </div>
            <div>
              <div className="count">
                <h3>10</h3>
              </div>
              <p>Course completed</p>
            </div>
          </div>
        </div>
        <div className="settings-edit col-lg-6">
          <form onSubmit={handleFormSubmit}>
            <div className="image-update">
              <img
                src={
                  "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                alt="profile"
              />
            </div>
            <div className="form-row row">
              <div className="form-group col-lg-6">
                <label>Full Name:</label>
                <br />
                <input
                  name="fullName"
                  placeholder="Enter full Name"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6">
                <label>Email Address:</label>
                <br />
                <input
                  name="email"
                  placeholder="Enter Email address"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-lg-6">
                <label>County:</label>
                <br />
                <input
                  name="county"
                  placeholder="Enter Country of residence"
                  type="text"
                  value={formData.county}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6">
                <label>City:</label>
                <br />
                <input
                  name="city"
                  placeholder="Enter City"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-lg-6">
                <label>School:</label>
                <br />
                <input
                  name="school"
                  placeholder="Enter School"
                  type="text"
                  value={formData.school}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6">
                <label>Grade/Year/Class:</label>
                <br />
                <input
                  name="grade"
                  placeholder="Enter Grade/Year/Class"
                  type="text"
                  value={formData.grade}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-lg-6">
                <label>Date Of Birth:</label>
                <br />
                <input
                  name="dateOfBirth"
                  placeholder="Enter date of birth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6">
                <label>Gender:</label>
                <br />
                <input
                  name="gender"
                  placeholder="Enter gender"
                  type="text"
                  value={formData.gender}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-editor-action-btns">
              <button
                type="button"
                className="cancel-btn"
                onClick={() =>
                  setFormData({
                    fullName: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    address: user.address,
                    city: user.city,
                    school: user.school,
                    grade: user.grade,
                    dateOfBirth: user.dateOfBirth,
                    gender: user.gender,
                  })
                }
              >
                Cancel
              </button>
              <button type="submit" className="confirm-btn">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
