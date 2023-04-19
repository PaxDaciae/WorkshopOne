// make the black-white changing cube with color transition in css to mosaic together into a background //

import React from "react"
import {useState} from "react"
import { useEffect } from "react"

export default function CubeElement(props){
    
    const [cubeSizeState, setCubeSizeState] = useState(props.side)
    const [cubeColorState, setCubeColorState] = useState(1)
    // console.log(props.side, "STATE", cubeSizeState, typeof(cubeSizeState.side))
    // const [clickState, setClickState] = useState(false)

    
    // function handleClick(){
    //     setClickState(prevState => !clickState)
    //     console.log(clickState)
    // }

    useEffect(() => {
      const colorChange = setInterval(() => {
        setCubeColorState(prevState => Math.floor(Math.random()*2));
      }, 50);
    
      return () => clearInterval(colorChange);
    }, []);

    // useEffect(() => {
    //   const colorChangeDeux = setInterval(() => {
    //     setCubeColorState(prevState => Math.floor(Math.random()*2));
    //   }, 60);
    
    //   return () => clearInterval(colorChangeDeux);
    // }, []);
    

    const styles = {
        backgroundCube : {
            margin: "1px",
            width: `${cubeSizeState}px`,
            height: `${cubeSizeState}px`,
            backgroundColor:  cubeColorState === 1 ? "white" : "red",
            color: "black",
            transitionDuration: "1s"
        }
    }
    return (
        
        <div className = "backgroundCube" style = {styles.backgroundCube} key = {props.key}></div>
    )
}