import React from 'react'

export default function Cube(props){
    
    const cubeStyle = {
        height: "100px",
        width: "100px",
        border: "1px solid black",
        // display: "inline-block",
        margin: "auto",
        borderRadius: "5px",
        backgroundColor: "#F8F3C3"
    }

    return(
        <div style = {cubeStyle} onClick = {props.handleClick} className = "testCube">
            {/* {(props.count <= 3) ? props.count : props.count%4}
            <br></br> */}
            {props.count}
        </div>
    )
}