
import { Link } from "react-router-dom";
import React from "react";
import "./navigationBarStyle.css"
import logo from "../../assets/logo.jpg"
import ReactDOM from "react-dom/client";


function NavigationBar(props) {

    return (
        <div className="sticky" style={{
            height: "100px",
            display: "flex",
            width: "100vw",
            backgroundColor:"red",
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

                <li><Link to="/">Home</Link></li>
                <li>Hello World</li>
                <li>About us</li>
                <li><Link to="/contact">Contact Us</Link></li>

            </ul>
            {/* <LandingPage></LandingPage> */}
        </div>

    );
}



export default NavigationBar;
const root = ReactDOM.createRoot(document.getElementById('root'));