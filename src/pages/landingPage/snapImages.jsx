import "../../pages/landingPage/snapimage.css"
import React, { Component, useEffect } from "react";
import { images } from "../images";

// import hungman from "../../assets/hungman.jpeg";
// import banner from "../../assets/banner.jpg";
// import gigachad from "../../assets/gigachad.jpg";
// import logo from "../../assets/logo.jpg";
import { useState } from "react";


function SnapImage() {
    const [image, setImage] = useState(0);

    const imageLoader = images.map(({ img, index }) => {
        return <img src={img}
            style={
                {
                    overflow: "hidden",
                    display: "flex",
                    objectFit: "contain"
                }}></img>
    }
    );
    console.log(image)
    return (
        <div style={{
            display: "flex",
            height: "60vh",
            // backgroundColor: "green",
            // width: "100vw",
        }}>
            <>
                <div style={{
                    height: "60vh",
                    width: "100vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    overflow: "hidden",
                }}>
                    <button onClick={() => {
                        setImage((prev) => {
                            if (prev < 3) { return image + 1 }
                            else {
                                return prev
                            }
                        })
                    }}>+</button>
                    {imageLoader[image]}
                    <button onClick={() => {
                        setImage((prev) => {
                            if (prev > 0) { return image - 1 }
                            else {
                                return prev
                            }
                        })
                    }}>-</button>

                </div>
            </>
        </div>
    );
}
export default SnapImage;