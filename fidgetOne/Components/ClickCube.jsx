import React from 'react'
import {useState} from 'react'
export default function Cube(props){
    
    const [cubeState, setCubeState] = useState(0)
    function alertYes(){
        console.log("yes")
    }
    const [cubeStyle, setCubeStyle] = useState({
        height: "100px",
        width: "100px",
        border: "1px solid black",
        // display: "inline-block",
        margin: "auto",
        borderRadius: "5px",
        backgroundColor: "#F8F3C3"
    })

    function cubeColorChange(){
        console.log("CCHAN")
        if ((cubeStyle.backgroundColor = "#F8F3C3")&&(props.count%3 === 0)){
            setCubeStyle(prevStyle => ({...cubeStyle, backgroundColor: "#FF0000"}))
        } else {
            setCubeStyle(prevStyle => ({...cubeStyle, backgroundColor: "#F8F3C3"}))
        }
    }

    function clickEvent(props){
        props.handleClick()
        console.log(typeof(props), props.count)
    }

    return(
        <div style = {cubeStyle} onClick = {() => {props.handleClick(), cubeColorChange()}} className = "testCube">
            {/* {(props.count <= 3) ? props.count : props.count%4}
            <br></br> */}
            {props.count}
            <br></br>
            
        </div>
    )
}

// function(){return 
//     cubeColorChange