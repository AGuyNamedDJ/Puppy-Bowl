// Initial Import;
import React from "react";
import { useOutletContext } from "react-router-dom"; 
    // This allows us to use an outlet.

const AllPups = () => {
    const OutletContext = useOutletContext(); 
    console.log("This is our outlet context: ", OutletContext); 

    return (
        <div id="font">
            <p>Check out our Pup Contestants! </p>
            {
                OutletContext[0].map((puppy, idx) => {
                    return <div key={idx}>
                        <p>Name of puppy: {puppy}</p>
                    </div>
                })
            }
        </div>
    )
};

export default AllPups; 