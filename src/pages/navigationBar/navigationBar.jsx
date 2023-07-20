
import React from "react";
import "./navigationBarStyle.css"
import logo from "../../assets/logo.jpg"

function NavigationBar() {

    return (
        <div className="sticky" style={{
            height: "100px",
            display: "flex",
            width: "100vw",
            backgroundColor: "blue",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <img
                style={{
                    height: "100px",
                }}
                src={logo} alt="Rosch Logo" />
            <ul className="nav" style={{
                alignItems: "center",
                justifyContent: "center"
            }}>

                <li>Teams</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </div>

    );
}



export default NavigationBar;
// const root = ReactDOM.createRoot(document.getElementById('root'));