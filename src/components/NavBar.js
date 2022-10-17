import React from "react";

// How to create a Navbar
// 1) Get Link from React-Router-Dom
import { Link, link } from "React-router-dom";
    // the link element creates links 

const Navbar = () => {
    return (
        <nav>

            <Link to="About"></Link>
            <Link to="See All Pups"></Link>
            <Link to="Settings"></Link>

            <a href="">About Us </a>
            <a href="">See All Pups </a>
            <a href="">Settings </a>
        </nav>
    )
};

export default Navbar;