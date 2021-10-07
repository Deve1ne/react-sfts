import React, {useEffect, useState} from "react";
import logo from "../img/promo-SFTS.jpg";
import {Link} from "react-router-dom";


function Home() {


    const [bio, setBio] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [imageAlt, setImageAlt] = useState([]);
    const urlImageShow = [];
    const bioShow = [];


    useEffect(() => {
        fetch("http://localhost:8080/bios")
            .then(res => res.json())
            .then(
                (result) => {
                    setBio(result);
                },
                (error) => {
                    setBio([]);


                }
            )

        fetch("http://localhost:8080/photos")
            .then(res => res.json())
            .then(
                (result) => {
                    var src = "../../build/static/media/" + result[0].source;
                    console.log(src)
                    setImageUrl(src);
                    setImageAlt(result[0].alt);
                },
                (error) => {
                    setImageUrl([]);


                }
            )


    }, []);


    for (let bi of bio) {
        bioShow.push(<div><h6 className="fw-bold">{bi.Langue}</h6>
            <p className="text-start">{bi.Text}</p></div>
        );
    }
    ;


    urlImageShow.push(
        <div className="justify-content-center ">
            <img
                className="img-fluid rounded  my-2"
                  src={logo}
           //     src={imageUrl}
                alt={imageAlt}
            />
        </div>
    );


    return (
        <div className="home">

            <div className="container">
                <div className="  min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="align-middle">
                        <h1 className=" titleSFTS text-light">STONE FROM THE SKY</h1>
                        <h2 className="text-light mt-5 mb-4 order"><p>New album</p><p> "Songs From The Deepwater"</p>
                        </h2>
                        <button type="button" className="btn btn-light ">
                            <Link className="nav-link fst-italic link-dark"
                                  to={{pathname: "https://morefuzz.net/shop-category/stone-from-the-sky/"}}
                                  target="_blank">
                                <h1> Order now</h1>
                            </Link></button>

                    </div>
                </div>

                <div className="container ">
                    <div className="bg-light p-2 rounded my-5">
                        <h1 className="fw-light">-BIO-</h1>
                        {urlImageShow}

                        <hr className="little-line my-4"/>
                        {bioShow}


                    </div>
                </div>


            </div>
        </div>
    );
}

export default Home;