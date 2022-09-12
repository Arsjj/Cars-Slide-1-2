import { Link } from "react-router-dom";
import './index.css'

import React from 'react'

function NavBar() {
    return (
        <div className="navBar">
            <Link to="/" className="link" >Cars Slide 1</Link>
            <Link to="/carsSlide2" className="link"> Cars Slide 2</Link>
        </div>
    )
}

export default NavBar