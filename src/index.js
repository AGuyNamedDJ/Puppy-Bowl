import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

// Writing Starter Code
const puppyBowlRosterArr = ["Contestant", "Kenny"]
    // update when found

// Declaring State
const Contestants = () => {
    // This is an empty starter plate;
    const [contestant, setContestant] = useState([])

    // Fetch Data
    useEffect(() => {
        // Here we are grabbing data from the Puppl Bowl API
        async function fetchPuppyBowlData () {

            // Try Block
                // Will TRY to run the code;
            try {
                // Fetch method that will get some data from the URL;
                const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com");

                // Convert promise response into JSON;
                const data = await response.json();
                console.log("Here is the translated data from the promise response: ", data)
                console.log("Here is the REAL data from the above translated data", data.results)

                // Sava data from response promise & update state;
                setContestant(data.results)


            // Catch Block
                // Will run if the TRY section fails to run;
            } catch (error){
                console.log(error)

            }

        }
        fetchPuppyBowlData;

    }, [])
    // Ask what this mean because I don't understand it

}