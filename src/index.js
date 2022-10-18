import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

// Import CreateBrowserRouter Method from Dependency
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Imported our Pages
import AllPups from "./components/AllPups";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";
import Settings from "./components/Settings";

// Now we need to use the brower in the index.js entry file to make a router instance
    // One argument needed
        // [] of objects; every object is an individual route of our react application
const router = createBrowserRouter([
    {
        path: "/",
        element: < Homepage />,
        errorElement:  < ErrorPage />,
        children: [
            // mimicks the parent
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/allpups",
                element: <AllPups />
            },
            {
                path: "/settings",
                element: <Settings />
            }
        ]
    }]
);

// Now you have to connect the router to the DOM
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"))
    // The router provider will be the top most parent component
        // then Homepage
