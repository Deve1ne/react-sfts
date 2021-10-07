import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import {Link, withRouter} from "react-router-dom";



var hidden = false;



function Navigation(props) {

    const [open, setOpen] = useState(false);
    return (
        <div className="navigation-fluid  background-transparency">
            <nav id="largeMenu" className="navbar navbar-expand navbar-dark ">
                <div className="container-fluid">


                    <div>
                        <ul className="navbar-nav ms-auto fs-4 fst-italic fw-bolder">
                            <li
                                className={`nav-item mx-3   ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/">
                                    Home
                                    <span className="sr-only"></span>
                                </Link>
                            </li>
                            <li
                                className={`nav-item mx-3  ${
                                    props.location.pathname === "/music" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/music">
                                    Medias
                                </Link>
                            </li>
                            <li className={`nav-item mx-3`}>
                                <Link className="nav-link" to={{pathname: "https://stonefromthesky.bandcamp.com/merch"}}
                                      target="_blank">
                                    Merch
                                </Link>
                            </li>
                            <li
                                className={`nav-item mx-3  ${
                                    props.location.pathname === "/tour" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/tour">
                                    Tour
                                </Link>
                            </li>
                            <li
                                className={`nav-item mx-3 ${
                                    props.location.pathname === "/tour" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <ul className="navbar-nav ms-auto">

                            <li>
                                <Link className="nav-link fs-3 mx-2"
                                      to={{pathname: "https://www.facebook.com/stonefromtheskystoner"}} target="_blank"><i
                                    className="fab fa-facebook-f fa-xs"></i></Link>
                            </li>
                            <li>
                                <Link className="nav-link fs-3 mx-2"
                                      to={{pathname: "https://www.instagram.com/wearestonefromthesky/"}}
                                      target="_blank"><i className="fab fa-instagram fa-xs"></i></Link>
                            </li>
                            <li>
                                <Link className="nav-link fs-3 mx-2"
                                      to={{pathname: "https://stonefromthesky.bandcamp.com"}} target="_blank"><i
                                    className="fab fa-bandcamp fa-xs"></i></Link>
                            </li>
                            <li>
                                <Link className="nav-link fs-3 mx-2"
                                      to={{pathname: "https://www.youtube.com/channel/UClO7OOlbOHg9fzazIy8mDAw"}}
                                      target="_blank"><i className="fab fa-youtube fa-xs"></i></Link>
                            </li>
                            <li>
                                <Link className="nav-link fs-3 mx-2"
                                      to={{pathname: "mailto:contact@stonefromthesky.fr"}} target="_blank"><i
                                    className="far fa-envelope fa-xs"></i></Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>

            {/* partie smartphone */}










            <div id="burgerMenu">
                <div  id="menuVertical">
                    <div>
                        <Collapse in={open}>
                            <div className="navbar-dark p-4">
                                <div>

                                    <ul className="navbar-nav ms-auto fs-4 fst-italic fw-bolder">
                                        <li
                                            className={`nav-item mx-3   ${
                                                props.location.pathname === "/" ? "active" : ""
                                            }`}
                                        >
                                            <Link onClick={() => setOpen(!open)} className="nav-link" to="/">
                                                Home
                                                <span className="sr-only"></span>
                                            </Link>
                                        </li>
                                        <li
                                            className={`nav-item mx-3  ${
                                                props.location.pathname === "/music" ? "active" : ""
                                            }`}
                                        >
                                            <Link onClick={() => setOpen(!open)} className="nav-link" to="/music">
                                                Medias
                                            </Link>
                                        </li>
                                        <li className={`nav-item mx-3`}>
                                            <Link onClick={() => setOpen(!open)} className="nav-link" to={{pathname: "https://stonefromthesky.bandcamp.com/merch"}}
                                                  target="_blank">
                                                Merch
                                            </Link>
                                        </li>
                                        <li
                                            className={`nav-item mx-3  ${
                                                props.location.pathname === "/tour" ? "active" : ""
                                            }`}
                                        >
                                            <Link onClick={() => setOpen(!open)} className="nav-link" to="/tour">
                                                Tour
                                                <div className="collapse" id="navbarToggleExternalContent">

                                                </div>

                                            </Link>
                                        </li>
                                        <li
                                            className={`nav-item mx-3 ${
                                                props.location.pathname === "/tour" ? "active" : ""
                                            }`}
                                        >
                                            <Link onClick={() => setOpen(!open)} className="nav-link" to="/contact">
                                                Contact
                                            </Link>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </Collapse>
                    </div>



                </div>
                <nav className="navbar navbar-dark navbar-dark">
                    <div className="container-fluid justify-content-center ">
                        <button
                                className='navbar-toggler'

                            type="button"

                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>


                <nav className="navbar navbar-expand navbar-dark ">
                    <div className="container-fluid justify-content-center ">
                        <div>
                            <ul className="navbar-nav ms-auto">

                                <li>
                                    <Link className="nav-link fs-3 mx-2"
                                          to={{pathname: "https://www.facebook.com/stonefromtheskystoner"}}
                                          target="_blank"><i
                                        className="fab fa-facebook-f fa-xs"></i></Link>
                                </li>
                                <li>
                                    <Link className="nav-link fs-3 mx-2"
                                          to={{pathname: "https://www.instagram.com/wearestonefromthesky/"}}
                                          target="_blank"><i className="fab fa-instagram fa-xs"></i></Link>
                                </li>
                                <li>
                                    <Link className="nav-link fs-3 mx-2"
                                          to={{pathname: "https://stonefromthesky.bandcamp.com"}} target="_blank"><i
                                        className="fab fa-bandcamp fa-xs"></i></Link>
                                </li>
                                <li>
                                    <Link className="nav-link fs-3 mx-2"
                                          to={{pathname: "https://www.youtube.com/channel/UClO7OOlbOHg9fzazIy8mDAw"}}
                                          target="_blank"><i className="fab fa-youtube fa-xs"></i></Link>
                                </li>
                                <li>
                                    <Link className="nav-link fs-3 mx-2"
                                          to={{pathname: "mailto:contact@stonefromthesky.fr"}} target="_blank"><i
                                        className="far fa-envelope fa-xs"></i></Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </nav>
            </div>

        </div>
    );
}

export default withRouter(Navigation);