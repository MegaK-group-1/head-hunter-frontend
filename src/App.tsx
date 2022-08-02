import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { CvPage } from './Pages/CvPage'
import {AdminPage} from "./Pages/AdminPage/AdminPage";
import CsvReader from "./Pages/CsvReader/CsvReader";
import {AddHR} from "./Pages/AddHR/AddHR";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<LoginPage />} />
        <Route path={'/cv'} element={<CvPage />} />
        <Route path={'/admin'} element={<AdminPage />} />
        <Route path={'/csv'} element={<CsvReader />} />
        <Route path={'/hr'} element={<AddHR />} />
      </Routes>
    </>
  )
}

export default App
