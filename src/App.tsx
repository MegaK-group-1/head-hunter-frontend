import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { CvPage } from "./Pages/CvPage";
import { AvailableStudentsPage } from "./Pages/AvailableStudentsPage/AvailableStudentsPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage />}
      />
      <Route
        path="/cv"
        element={<CvPage />}
      />
      <Route
        path="/available-students"
        element={<AvailableStudentsPage />}
      />
    </Routes>
  );
}

export default App;
