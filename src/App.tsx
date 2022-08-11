import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { CvPage } from "./Pages/CvPage";
import { AdminPage } from "./components/Organism/AdminPage";
import CsvReader from "./Pages/CsvReader/CsvReader";
import { AddHR } from "./components/Organism/AddHR";
import { AvailableStudentsPage } from "./Pages/AvailableStudentsPage/AvailableStudentsPage";
import { ReservedStudentsPage } from "./Pages/ReservedStudentsPage/ReservedStudentsPage";
import { StudentCvDetails } from "./utils/Context/StudentCvDetails";
import { CvDetailsInterface } from "./utils/types/CvDetailsInterface";
import { UserPage } from "./Pages/UserPage/UserPage";

function App() {
  const [student, setStudent] = useState({} as CvDetailsInterface);
  return (
    <StudentCvDetails.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ cvDetails: student, id: "", setDetails: setStudent }}
    >
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
          path="/reserved-students"
          element={<ReservedStudentsPage />}
        />
        <Route
          path="/student/:id"
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
        <Route
          path="/userPage"
          element={<UserPage />}
        />
      </Routes>
    </StudentCvDetails.Provider>
  );
}

export default App;
