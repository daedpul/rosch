import "../../pages/landingPage/snapimage.css"
import React, { Component, useEffect } from "react";
// import { PlaceholderImage } from "../images";
import hungman from "../../assets/hungman.jpeg";
import banner from "../../assets/banner.jpg";
import gigachad from "../../assets/gigachad.jpg";
import logo from "../../assets/logo.jpg";
import { useState } from "react";


function SnapImage() {

    const [tileImage, setTileImage] = useState("");
    // setTileImage(setTile(0));
    return (
        <div style={{
            display: "flex",
            height: "60vh",
            width: "100vw",
        }}>
            <>
                <div style={{
                    height: "60vh",
                    width: "100vw",
                    overflow: "hidden",
                }}>
                    <img src={tileImage}></img>
                </div>
            </>
        </div>
    );
}

function setTile({index}) {
    let placeHolderImage;
    console.log("hello world")
    switch (index) {
        case 0: {
            placeHolderImage = {
                image: hungman
            }
            break;
        }
        case 1: {
            placeHolderImage = {
                image: banner
            }
            break;
        }
        case 2: {
            placeHolderImage = {
                image: gigachad
            }
            break;
        }
        case 3:
        default: {
            placeHolderImage = {
                image: logo
            }
            break;
        }
    }
    return placeHolderImage
}

export default SnapImage;