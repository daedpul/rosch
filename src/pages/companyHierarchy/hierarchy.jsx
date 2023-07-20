import 'bootstrap/dist/css/bootstrap.css'
import hungman from "../../assets/hungman.jpeg";
import '../companyHierarchy/hierarchy.css'
import { useTransition } from 'react';



const employeeData = [
    {
        "name": "Rio Panglimutan",
        "position": "General manager"
    },
    {
        "name": "Rio",
        "position": "Senior operations manager"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Finance manager"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Billing Liason"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Billing Liason"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Human Resource"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Human Resource"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Human Resource"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Head Tech Representative"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Supervisor"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Supervisor"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Supervisor"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Supervisor"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Supervisor"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Technical Representative"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Technical Representative"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Technical Representative"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Technical Representative"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Technical Representative"
    },
    {
        "name": "Rio Panglimutan",
        "position": "Technical Representative"
    },

]


function populate() {
    var index = 0;
    const people = employeeData.map(({ name, position }) => {
        const props = [
            { "name": name, "position": position }
        ]
        index += 1;
        console.log(index)
        if (index % 2 === 0) {
            return <GridTiles
                position="center"
                justifyContent="flex-start"
                key={index}
                flexDirection="row"
                props={props}
            />
        }
        else {
            return <GridTiles
                position="center"
                justifyContent="end"
                key={index}
                flexDirection="row-reverse"
                props={props}
            />
        }
    }
    );
    return people
}

function Hierarchy() {

    return (
        <div>
            {populate()}
        </div >);
}

function GridTiles({ position, justifyContent, flexDirection, props }) {

    let employeeName = props[0].name
    let employeePosition = props[0].position
    return (
        <div style={{
            height: "300px",
            display: "flex",
            flexDirection: flexDirection,
            justifyContent: justifyContent,
            backgroundColor: "red",
            alignItems: position,
            margin: "10vh"

        }}>
            <img src={hungman} alt="hungman" style={{
                height: "15vw",
                width: "15vw",
                margin: "20px",
                borderRadius: "50%",
                objectFit: "contain",
            }} />
            <div style={{
                flexDirection: "column",
                display: "flex"
            }}>
                <label style={{ fontSize: "40px" }}>{employeeName}</label>
                <label style={{ fontSize: "20px" }}>{employeePosition}</label>
            </div>
            <label>DADWDADW</label>
        </div>
    );
}

export default Hierarchy;