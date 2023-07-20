import "../../pages/landingPage/snapimage.css"
// import React, { Component, useEffect } from "react";
import { images } from "../images";

import { useState, useEffect } from "react";




function SnapImage() {
    const [image, setImage] = useState(0);

    const imageLoader = images.map(({ img,}) => {
        return <img src={img}
            style={
                {
                    height: "60vh",
                    width: "100vw",
                    display: "flex",
                    objectFit: "contain",
                    overflow: "hidden"
                }}></img>
    }
    );
    useEffect(() => {
        const intervalId = setInterval(() => {
            setImage((prev) => prev > 2 ? 0 : prev + 1)
        }, 1000)
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div style={{
            display: "flex",
            height: "60vh",
        }}>
            <>
                <div style={{

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}>
                    {imageLoader[image]}
                </div>
            </>
        </div>
    );
}
export default SnapImage;