import hungman from "../assets/hungman.jpeg";
import banner from "../assets/banner.jpg";
import gigachad from "../assets/gigachad.jpg";
import logo from "../assets/logo.jpg";
// import { useState } from "react";

export const images = [
    {
        img:hungman,
    },
    {
        img:banner,
    },
    {
        img:gigachad,
    },
    {
        img:logo,
    },
];

export default images;
/*export function PlaceholderImage({ index }) {

    const [thisIndex, setIndex] = useState("");
    const [image, setImage] = useState("");
    switch (thisIndex) {
        case 0: {
            setImage(hungman)
            break;
        }
        case 1: {
            setImage(banner)
            break;
        }
        case 2: {
            setImage(gigachad)
            break;
        }
        case 3: {
            setImage(logo)
            break;
        }
        default: {
            setImage(banner)
            break;
        }
    }
    return (
        <></>
    );
}*/