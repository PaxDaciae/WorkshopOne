// make the black-white changing cube with color transition in css to mosaic together into a background //

import React from "react"
import {useState} from "react"

export default function CubeElement(){

    const [cubeSizeState, setCubeSizeState] = useState(10)
    const [cubeColorState, setCubeColorState] = useState(1)

    
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCubeColorState = (prevState => !prevState)
    //       }, 1000);
    //     return () => clearTimeout(timer);
    //   }, []);


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCubeColorState(prevState => cubeColorState = !prevState);
    //       }, 5000); 
    //     return () => clearInterval(interval);
    //   }, []);

      function changeColor() {setInterval(() => {
        setCubeColorState(prevState => cubeColorState = !prevState);
      }, 1000); }

    const styles = {
        backgroundCube : {
            margin: "1px",
            width: `${cubeSizeState}px`,
            height: `${cubeSizeState}px`,
            backgroundColor:  cubeColorState === 0 ? "black" : "white"
        }
    }
    return (
        
        <div className = "backgroundCube" style = {styles.backgroundCube}></div>
    )
}