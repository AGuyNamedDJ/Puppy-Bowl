import React from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router";

const Homepage = () => {
    return (
        <div>
            <h1>Welcome to Our Puppy Site! </h1>
            <Navbar />

            <Outlet />
        </div>
    )
}