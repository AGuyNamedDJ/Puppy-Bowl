import React, {useState} from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

const Homepage = () => {

// Declaring State

    // Fetch Data

    useEffect(() => {
        // Here we are grabbing data from the Puppl Bowl API
        async function fetchPuppyBowlData () {

            // Try Block
                // Will TRY to run the code as normal;
            try {
                // Fetch method to get data from the URL;
                const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players");

                // Convert promise response into JSON;
                const puppyData = await response.json();
                console.log("Here is the translated data from the promise response: ", puppyData);
                console.log("Here is the REAL data: ", data.results);

                // Sava data from response promise & update state;
                setContestants(puppyData.data.results)
                    // Correct this as of class question


            // Catch Block
                // Will run if the TRY section fails to run;
            } catch (error){
                console.log(error)
            }
        }
        fetchPuppyBowlData()
    }, [])

    // Rendering the Game State
    return (
        <div>
            <h1>Puppy Bowl</h1>
            <Navbar />
            <Outlet context={[puppy, setPuppy]} />
            <div className="puppyBox">
                {
                    contestants && contestants.length ? puppyPlayers.map((pup, idx) => {
                        // Terenary ^
                    return <div key={idx}>
                        <p>Name of Contestant: {pup.name}</p>
                        <p>Pup Breed: {pup.breed}</p>
                        <img src={pup.imageUrl}></img>    
                    </div>               
                }) : <div>No pups to display, someone is biting the server cords...</div>
                    // This is for the Truthy half of terenary
            } 
            </div>   
        </div>
    )
};

export default Homepage
