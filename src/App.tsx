import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./Pages/LoginPage/LoginPage";
import {RegisterPage} from "./Pages/RegisterPage/RegisterPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<LoginPage/>} />
                <Route path={'/register'} element={<RegisterPage/>} />

            </Routes>
        </>
    );
}

export default App;
