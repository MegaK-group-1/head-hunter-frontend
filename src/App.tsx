import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage/HomePage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/home'} element={<HomePage/>} />

            </Routes>
        </>
    );
}

export default App;
