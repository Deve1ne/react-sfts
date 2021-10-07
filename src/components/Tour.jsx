import React, {useEffect, useState} from "react";


function Tour() {

    const now = new Date();

    var futur = false;
    var past = true;

    const [tours, setTours] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/tours")
            .then(res => res.json())
            .then(

                (tour) => {
                    console.log(tour);
                    setTours(tour);
                },
                (error) => {
                    setTours([]);
                }
            )
    }, [])



    const futurShow = [];
    const futurShowDate = [];
    const pastShow = [];
    const pastShowDate = [];

    tours.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.

        return new Date(b.Moment) - new Date(a.Moment);
    });





    for (let tour of tours) {
       // console.log(new Date(tour.moment))

        if (new Date(tour.Moment) >= now) {
            futur = true;
        } else {
            past = true
        }
    }

    if (futur === true) {
        futurShow.push(<div className="my-4">

            <h2>Futur shows</h2>{futurShowDate}</div>);

        for (let tour of tours) {
            if (new Date(tour.Moment) >= now) {
                futurShowDate.push(<div className="my-4">
                    <h6> {tour.Lieu} - <span className="text-secondary">{tour.Moment}</span></h6>
                </div>);

            }
            ;
        }
    }
    if (futur === true && past === true) {
        futurShow.push(<hr className="little-line"/>);
    }


    if (past === true) {
        pastShow.push(<div className="my-4 rounded">

            <h2>Past shows</h2>{pastShowDate}</div>);

        for (let tour of tours) {
            if (new Date(tour.Moment) < now) {
                pastShowDate.push(<div className="my-4">
                    <h6> {tour.Lieu} - <span className="text-secondary">{tour.Moment}</span></h6>
                </div>);

            }
            ;
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