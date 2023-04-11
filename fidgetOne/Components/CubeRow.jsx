import React from "react"
import BackgroundCube from "./BackgroundCube"

export default function CubeCanvas(){
    // const width = screen.width
    // const height = screen.height
    const styles = {
        row: {
            display: "flex",
            flexShrink: "0"
        }
    }
    let cubeNumber = []

    const side = 10
    const ratio = screen.width 
    for(let i = 0; i <= (128); i++){
        cubeNumber.push(i)
    }

    let cubeRow = cubeNumber.map(i => <BackgroundCube key = {i} side ={{side}}/>)
    return(
        <div style = {styles.row}> 
            {cubeRow}
        </div>
    )
}