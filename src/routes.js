import { Route, Routes } from "react-router-dom";

import React from 'react'
import Slide from "./pages/CarsSlide1";
import Slide2 from "./pages/CarsSlide2";

function Pages() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Slide />} />
                <Route path="carsSlide2" element={<Slide2 />} />
            </Routes>
        </>
    )
}

export default Pages