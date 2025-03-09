import React from "react";
import {Link} from 'react-router-dom'
import '../css/home.css';
const Navbar = () => {
    return (
        <nav>
                <Link to="/"><p className="sitename">Flow for all</p></Link>
                <Link to="/donations"><p className="menu">Donations</p></Link>
                <Link to="/map"><p className="menu">Map</p></Link>
                <Link to="/mission"><p className="menu">Our Mission</p></Link>
                <svg className="material-icons" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"/>
                </svg>
        </nav> 
    )
}
export default Navbar;
