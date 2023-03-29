import React from 'react'
import {useState} from 'react'
import Squirrel from "../src/Images/Squirrel.png"


export default function Cube(props){
    
    const [cubeState, setCubeState] = useState(0)


    const [cubeStyle, setCubeStyle] = useState({
        height: "100px",
        width: "100px",
        border: "1px solid black",
        // display: "inline-block",
        margin: "auto",
        borderRadius: "5px",
        backgroundColor: "#F8F3C3",
        userSelect: "none"
    })    

    const buttonStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: "yellow",
        ImageBackground: `url(${Squirrel})`
    }
    
    // function clickEvent(props){
    //     props.handleClick()
    //     function cubeColorChange(){
        
    //         if (cubeStyle.backgroundColor === "#F8F3C3" && props.count === 2){
    //             setCubeStyle(prevStyle => ({...prevStyle, backgroundColor: "#FF0000"}))
    //         } else {
    //             setCubeStyle(prevStyle => ({...prevStyle, backgroundColor: "#F8F3C3"}))
    //         }
    //     }
    //     cubeColorChange()
    // }

    return(
        <div>
            <a onClick = {props.handleClick}><img src = {Squirrel}></img></a>
            <hr></hr>
            {props.count}
        </div>
        // <div style = {cubeStyle} onClick = {() => {clickEvent(props)}} className = "testCube">
        //     {/* {(props.count <= 3) ? props.count : props.count%4}
        //     <br></br> */}
        //     {props.count}
        //     <br></br>
        //     {(props.count === 3)? <p>Testy</p> : <p>noTesty</p>}
        // </div>
    )
}

// function(){return 
//     cubeColorChange

// style = {buttonStyle} 