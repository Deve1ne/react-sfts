import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';

function Navigation(props) {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/music", label: "Medias" },
        { path: "https://stonefromthesky.bandcamp.com/merch", label: "Merch", external: true },
        { path: "/tour", label: "Tour" },
        { path: "/contact", label: "Contact" }
    ];

    const socialLinks = [
        { path: "https://www.facebook.com/stonefromtheskystoner", icon: "fab fa-facebook-f" },
        { path: "https://www.instagram.com/wearestonefromthesky/", icon: "fab fa-instagram" },
        { path: "https://stonefromthesky.bandcamp.com", icon: "fab fa-bandcamp" },
        { path: "https://www.youtube.com/channel/UClO7OOlbOHg9fzazIy8mDAw", icon: "fab fa-youtube" },
        { path: "mailto:contact@stonefromthesky.fr", icon: "far fa-envelope" }
    ];

    const renderNavLinks = (isMobile = false) => {
        return navLinks.map((link, index) => (
            <li
                key={index}
                className={`nav-item mx-3 ${props.location.pathname === link.path ? "active" : ""}`}
            >
                <Link
                    className="nav-link"
                    to={link.external ? { pathname: link.path } : link.path}
                    target={link.external ? "_blank" : ""}
                    onClick={isMobile ? () => setOpen(!open) : undefined}
                >
                    {link.label}
                </Link>
            </li>
        ));
    };

    const renderSocialLinks = () => {
        return socialLinks.map((link, index) => (
            <li key={index}>
                <Link className="nav-link fs-3 mx-2" to={{ pathname: link.path }} target="_blank">
                    <i className={`${link.icon} fa-xs`}></i>
                </Link>
            </li>
        ));
    };

    return (
        <div className="navigation-fluid background-transparency">
            <nav id="largeMenu" className="navbar navbar-expand navbar-dark">
                <div className="container-fluid">
                    <div>
                        <ul className="navbar-nav ms-auto fs-4 fst-italic fw-bolder">
                            {renderNavLinks()}
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav ms-auto">
                            {renderSocialLinks()}
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="burgerMenu">
                <div id="menuVertical">
                    <Collapse in={open}>
                        <div className="navbar-dark p-4">
                            <ul className="navbar-nav ms-auto fs-4 fst-italic fw-bolder">
                                {renderNavLinks(true)}
                            </ul>
                        </div>
                    </Collapse>
                </div>
                <nav className="navbar navbar-dark navbar-dark">
                    <div className="container-fluid justify-content-center">
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <nav className="navbar navbar-expand navbar-dark">
                    <div className="container-fluid justify-content-center">
                        <ul className="navbar-nav ms-auto">
                            {renderSocialLinks()}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default withRouter(Navigation);
