import React from "react";
import reactLogo from "../images/react-logo.png"

export default function NavBar(){
    return(
    <nav className="nav-bar">
        <div className="logo-section">
            <img src={reactLogo} className="react-logo"></img>
            <h3>ReactFacts</h3>
        </div>
        <div className="title-section">
            <h4>React Course - Project 1</h4>
        </div>
    </nav>
    )
}