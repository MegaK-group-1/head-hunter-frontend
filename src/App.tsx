import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { CvPage } from './Pages/CvPage'
import {AdminPage} from "./Pages/AdminPage/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<LoginPage />} />
        <Route path={'/cv'} element={<CvPage />} />
        <Route path={'/admin'} element={<AdminPage />} />
      </Routes>
    </>
  )
}

export default App
