import React from 'react'
import {useState} from 'react'
import Squirrel from "../src/Images/Squirrel.png"


export default function Cube(props){
    
    const [cubeState, setCubeState] = useState(0)


    // TEST BED TO SEE IF STYLES CAN BE STATE //
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

    // TEST BED TO SEE IF STYLES CAN BE CONTAINED IN A SINGLE OBJECT //
    // styles OBJECT LITERAL CONTAINS OTHER STYLE PRESETS AS OBJECTS //
    const styles = {
        smallCube: {
            height: "100px",
            width: "100px",
            backgroundColor: 'red'
        },
        largeCube: {
            height: "200px",
            width: "200px",
            backgroundColor: 'green'

        },
        buttonStyle: {
            width: "100px",
            height: "100px",
            backgroundColor: "yellow",
            ImageBackground: `url(${Squirrel})`
        },
    }

    console.log("STLS", styles.smallCube, cubeStyle)
    
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
            {/* <a style = {styles.Squirrel} onClick = {props.handleClick}><img src = {Squirrel}></img></a> */}
            <div style = {styles.smallCube}></div>
            <div style = {styles.largeCube}></div>
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