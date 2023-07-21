
import React from "react";
import "./navigationBarStyle.css"
import logo from "../../assets/logo.png"
import { useEffect } from "react";


const NavigationBar = ({ teamsRef, aboutRef, contactRef }) => {


    const goToTeams = (e) => {
        e.preventDefault();
        teamsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const goToAbout = (e) => {
        e.preventDefault();
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const goToContact = (e) => {
        e.preventDefault();
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

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

                <li onClick={goToTeams}>Teams</li>
                <li onClick={goToAbout}>About us</li>
                <li onClick={goToContact}>Contact us</li>
            </ul>
        </div>

    );
}



export default NavigationBar;
// const root = ReactDOM.createRoot(document.getElementById('root'));