import { Link } from "react-router-dom";
import "./Form.css";

export default function Form({
  screen,
  email,
  setEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  grade,
  setGrade,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  currentPassword,
  onLogin,
  county,
  setCounty,
  onSignup,
  onForgotPassword,
  onResetPassword,
  setCurrentPassword,
  buttonText,
  isButtonDisabled,
}) {
  const renderInputs = () => {
    switch (screen) {
      case "login":
        return (
          <>
            <div className="form-group">
              <label>Email:</label>
              <br />
              <input
                placeholder="Enter your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <br />
              <input
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              Forgot password?{" "}
              <Link to={"/registration/forgot-password"}>click here</Link>
            </p>
          </>
        );
      case "sign-up":
        return (
          <>
            <div className="form-group">
              <label>First name:</label>
              <br />
              <input
                required
                placeholder="Enter your First name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last name:</label>
              <br />
              <input
                required
                placeholder="Enter your last name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Grade:</label>
              <br />
              <input
                placeholder="Grade/Class/Year"
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>County:</label>
              <br />
              <input
                required
                placeholder="County of Residence"
                type="text"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <br />
              <input
                required
                placeholder="Enter your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <br />
              <input
                required
                placeholder="Create your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <br />
              <input
                required
                placeholder="Confirm your password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </>
        );
      case "forgot-password":
        return (
          <>
            <div className="form-group">
              <label>Email:</label>
              <br />
              <input
                required
                placeholder="Enter your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
              />
            </div>
          </>
        );
      case "reset-password":
        return (
          <>
            <div className="form-group">
              <label>New Password:</label>
              <br />
              <input
                required
                placeholder="Create your new password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <br />
              <input
                required
                placeholder="Confirm your new password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderButtons = () => {
    switch (screen) {
      case "login":
        return (
          <div className="submit-btns">
            <button className="submit-btn" type="submit">
              Login
            </button>
            <div className="text-with-lines">or</div>
            <Link
              to={"/registration/sign-up"}
              className="submit-btn"
              style={{ backgroundColor: "gray" }}
            >
              Sign up
            </Link>
          </div>
        );
      case "sign-up":
        return (
          <div className="submit-btns">
            <button className="submit-btn" type="submit">
              Sign up
            </button>
            <div className="text-with-lines">or</div>
            <Link
              to={"/registration/login"}
              className="submit-btn"
              style={{ backgroundColor: "gray" }}
            >
              Login
            </Link>
          </div>
        );
      case "forgot-password":
        return (
          <div className="submit-btns">
            <button
              className="submit-btn"
              type="submit"
              disabled={isButtonDisabled}
              style={{ backgroundColor: isButtonDisabled ? "gray" : "blue" }}
            >
              {buttonText}
            </button>
          </div>
        );
      case "reset-password":
        return (
          <div className="submit-btns">
            <button className="submit-btn" type="submit">
              Change Password
            </button>
            <div className="text-with-lines">or</div>
            <button className="submit-btn">Cancel</button>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (screen === "login" && onLogin) {
      onLogin(e);
    } else if (screen === "sign-up" && onSignup) {
      onSignup(e);
    } else if (screen === "forgot-password" && onForgotPassword) {
      onForgotPassword(e);
    } else if (screen === "reset-password" && onResetPassword) {
      onResetPassword(e);
    }
  };

  return (
    <div className="form col-lg-7">
      <h2>
        {screen === "sign-up" ? "Student " : "User "}

        {screen.charAt(0).toUpperCase() + screen.slice(1).replace("-", " ")}
      </h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {renderInputs()}
          {renderButtons()}
        </form>
      </div>
    </div>
  );
}
