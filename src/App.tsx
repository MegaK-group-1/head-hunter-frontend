import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { CvPage } from './Pages/CvPage'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<LoginPage />} />
        <Route path={'/cv'} element={<CvPage />} />
      </Routes>
    </>
  )
}

export default App
