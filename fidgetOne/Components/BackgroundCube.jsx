// make the black-white changing cube with color transition in css to mosaic together into a background //

import React from "react"
import {useState} from "react"

export default function CubeElement(props){
    
    const [cubeSizeState, setCubeSizeState] = useState(props.side.side)
    const [cubeColorState, setCubeColorState] = useState(true)
    console.log(props.side, "STATE", cubeSizeState, typeof(cubeSizeState.side))
    
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

      // function changeColor() {setInterval(() => {
      //   setCubeColorState(prevState => (cubeColorState = !prevState));
      // }, 1000); }

      // useEffect(() => {
      //   const interval = setInterval(() => {
      //     setTime(new Date());
      //   }, 1000);
    
      //   return () => clearInterval(interval);
      // }, []);

      useEffect(() => {
        const colorChange = setInterval(() => {
          setCubeColorState(prevState => (cubeColorState = !prevState));
        }, 2000);

        return () => clearInterval(colorChange);
      }, []);

      // useEffect(() => {
      //   setInterval(() => {
      //     function changeCol(){setCubeColorState(prevState => (cubeColorState = !prevState))}
      //     changeCol()
      //   }, 1000);
      //   return () => {
      //     clearInterval(interval);
      // }, []);

    const styles = {
        backgroundCube : {
            margin: "1px",
            width: `${cubeSizeState}px`,
            height: `${cubeSizeState}px`,
            backgroundColor:  cubeColorState ? "white" : "black",
            color: "black"
        }
    }
    return (
        
        <div className = "backgroundCube" style = {styles.backgroundCube} key = {props.key}></div>
    )
}