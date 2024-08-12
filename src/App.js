import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/registration/reset-password/:resetToken"
            element={<Registration />}
          />
          <Route path="/registration/:screen" element={<Registration />} />
          <Route path="/tutor/:screen/*" element={<Home />} />
          <Route path="/admin/:screen/*" element={<Home />} />
          <Route path="/student/:screen/*" element={<Home />} />
          {user ? (
            <>
              <Route path={`/${user?.role}/dashboard`} element={<Home />} />
              <Route
                path="/"
                element={<Navigate to={`/${user?.role}/dashboard`} />}
              />
            </>
          ) : (
            <Route path="/" element={<Navigate to="/registration/login" />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
