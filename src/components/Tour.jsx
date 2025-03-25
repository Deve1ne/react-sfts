import React, { useEffect, useState } from "react";

function Tour() {
    const now = new Date();
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Tours.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setTours(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const renderShows = (tours, isFuture) => {
        const filteredTours = tours.filter(tour => isFuture ? new Date(tour.date) >= now : new Date(tour.date) < now);
        if (filteredTours.length === 0) return null;

        return (
            <div className="my-4 rounded">
                <h2>{isFuture ? "Futur shows" : "Past shows"}</h2>
                {filteredTours.map(tour => (
                    <div key={tour.id} className="my-4">
                        <h6>{tour.lieu} - <span className="text-secondary">{tour.date}</span></h6>
                    </div>
                ))}
            </div>
        );
    };

    const sortedTours = tours.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="about">
            <div className="container">
                <div className="bg-light p-2 rounded my-5">
                    <h1>-TOUR DATES-</h1>
                    {renderShows(sortedTours, true)}
                    {renderShows(sortedTours, false)}
                </div>
            </div>
        </div>
    );
}

export default Tour;
