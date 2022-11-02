import { createRoot } from 'react-dom/client'
import React, {useEffect, useState} from 'react';


const HomePage = () => {

    // Declaring the state (an empty array for now);
    const [puppyList, setPuppyList] = useState([]);

    // Fetching data
    useEffect(() => {
        async function fetchPuppyBowlData () {
            try {
                const response = await fetch(" https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-MT-WEB-FT/players");
                const results = await response.json();
            // Set state
                setPuppyList(results.data.players);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPuppyBowlData();
    }, []); // Runs only on the first render

    // Return to Screen
    return (
        <div className="puppy-container">
            {
                puppyList && puppyList.length ? puppyList.map((indivPuppy, idx) => {
                    return (
                        <div key={idx} className="card">
                            <div className="title">
                                <h1>{indivPuppy.name}</h1>
                                <h3># {indivPuppy.id}</h3>
                            </div>
                            <img className="puppy-pic" src={indivPuppy.imageUrl} />
                            <button>See Details</button>
                            <button>Delete From Roster</button>
                        </div>
                    )
                }) : <div>Puppy Servers are currently down - the Pups got out!</div>
            }
        </div>
    )
};


const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(<HomePage />);