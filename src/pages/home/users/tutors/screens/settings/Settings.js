import "./Settings.css";
import ScreenHeader from "../../../../common/components/screenHeader/ScreenHeader";
import ScreenTab from "../../../../common/components/screentab/ScreenTab";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../../redux/features/userSlice";

export default function Settings() {
  const user = useSelector(selectUser);
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
          <form>
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
                <input placeholder="Enter full Name" type={"text"} />
              </div>
              <div className="form-group col-lg-6">
                <label>Email Address:</label>
                <br />
                <input placeholder="Enter Email address" type={"email"} />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-lg-6">
                <label>Address:</label>
                <br />
                <input placeholder="Enter Address" type={"text"} />
              </div>
              <div className="form-group col-lg-6">
                <label>City:</label>
                <br />
                <input placeholder="Enter City" type={"text"} />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-lg-6">
                <label>School:</label>
                <br />
                <input placeholder="Enter School" type={"text"} />
              </div>
              <div className="form-group col-lg-6">
                <label>Grade/Year/Class:</label>
                <br />
                <input placeholder="Enter Grade/Year/Class" type={"text"} />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-lg-6">
                <label>Date Of Birth:</label>
                <br />
                <input placeholder="Enter date of birth" type={"date"} />
              </div>
              <div className="form-group col-lg-6">
                <label>Gender:</label>
                <br />
                <input placeholder="Enter gender" type={"text"} />
              </div>
            </div>
            <div className="form-editor-action-btns">
              <button className="cancel-btn">Cancel</button>
              <button className="confirm-btn">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
