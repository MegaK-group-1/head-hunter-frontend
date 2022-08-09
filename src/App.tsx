import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { CvPage } from "./Pages/CvPage";
import { AdminPage } from "./components/Organism/AdminPage";
import CsvReader from "./Pages/CsvReader/CsvReader";
import { AddHR } from "./components/Organism/AddHR";
import { AvailableStudentsPage } from "./Pages/AvailableStudentsPage/AvailableStudentsPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage />}
      />{" "}
      <Route
        path="/students"
        element={<AvailableStudentsPage />}
      />
      <Route
        path="/cv"
        element={<CvPage />}
      />
      <Route
        path="/admin"
        element={<AdminPage />}
      />
      <Route
        path="/csv"
        element={<CsvReader />}
      />
      <Route
        path="/hr"
        element={<AddHR />}
      />
    </Routes>
  );
}

export default App;
