import React from "react";

export default function MainSection(){
    return(
        <div className="main-container">
            <div className="main-content">
                <h1 className="main-header">Fun facts about React</h1>
                <ul className="main-list">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}