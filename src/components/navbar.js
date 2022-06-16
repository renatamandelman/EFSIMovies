import React from "react";
import './styles.css';
import logo from './logo.PNG';

function Navbar() {
    return (
        <>
            <nav>
                <img className="logo" src={logo} />
                <div>
                    <a className="nav-item" href="/">Home</a>
                    <a className="nav-item" href="/">Movies</a>
                    <a className="nav-item" href="/">Series</a>
                    <a className="nav-item" href="/">Trailers</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar; 