import React, {useEffect, useState} from "react";


function Tour() {

    const now = new Date();

    var futur = false;
    var past = true;

    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Tours.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                console.log(jsonData)
                setTours(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(tours)


    const futurShow = [];
    const futurShowDate = [];
    const pastShow = [];
    const pastShowDate = [];

    tours.sort(function (a, b) {
        console.log(a, b)

        return new Date(b.date) - new Date(a.date);
    });





    for (let tour of tours) {
        if (new Date(tour.date) >= now) {
            futur = true;
        } else {
            past = true
        }
    }

    if (futur === true) {
        futurShow.push(<div className="my-4">

            <h2>Futur shows</h2>{futurShowDate}</div>);

        for (let tour of tours) {
            if (new Date(tour.date) >= now) {
                futurShowDate.push(<div className="my-4">
                    <h6> {tour.lieu} - <span className="text-secondary">{tour.date}</span></h6>
                </div>);

            }

        }
    }
    if (futur === true && past === true) {
        futurShow.push(<hr className="little-line"/>);
    }


    if (past === true) {
        pastShow.push(<div className="my-4 rounded">

            <h2>Past shows</h2>{pastShowDate}</div>);

        for (let tour of tours) {
            if (new Date(tour.date) < now) {
                pastShowDate.push(<div className="my-4">
                    <h6> {tour.lieu} - <span className="text-secondary">{tour.date}</span></h6>
                </div>);

            }

        }
    }


    return (
        <div className="about">

            <div className="container ">
                <div className="bg-light p-2 rounded my-5">
                    <h1>-TOUR DATES-</h1>
                    {futurShow}
                    {pastShow}

                </div>
            </div>
        </div>
    );
}

export default Tour;
