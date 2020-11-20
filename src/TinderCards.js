import React, { useState, useEffect } from 'react';
import database from "./firebase";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {

    const [people, setPeople] = useState([]);

    // Piece of code which runs based on condition
    useEffect(() => {
    // this is where code runs
        const unsubscribe = database
        .collection('people')
        .onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            // this is clean up ...
            unsubscribe();
        }

    // this will run ONCE when the component loads, and never again
    }, []);

    return (
        <div>
            <div className="tinderCards-cardContainer">
                {people.map(person => (
                    <TinderCard
                     className="swipe"
                     key={person.name}
                     preventSwipe={['up', 'down']}
                    >
                        <div
                        style={{ backgroundImage: `url(${person.url})` }} 
                        className="card">
                        <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards